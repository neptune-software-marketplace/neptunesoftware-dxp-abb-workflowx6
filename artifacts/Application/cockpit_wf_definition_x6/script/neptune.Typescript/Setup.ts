// @ts-ignore
const { Graph, Shape, Node, Addon } = X6;

let graph = null;

const container = document.getElementById("graphCanvas");

graph = new Graph({
    container,
    height: "100%",
    width: "100%",
    connecting: {
        router: {
            name: "manhattan",
            args: {
                startDirections: ['bottom'],
                endDirections: ['top']
            }
        },
        connector: {
            name: "rounded",
            args: {
                radius: 8,
            },
        },
        anchor: "center",
        connectionPoint: "anchor",
        allowBlank: false,
        snap: {
            radius: 20,
        },
        createEdge() {
            return new Shape.Edge({
                attrs: {
                    line: {
                        stroke: "#A2B1C3",
                        strokeWidth: 2,
                        targetMarker: {
                            name: "block",
                            width: 12,
                            height: 8,
                        },
                    },
                },
                zIndex: 0,
            });
        },
        validateConnection: function (this, args) {
            return args.targetPort == "in-port";
        },
    },
});

const ports = {
    groups: {
        in: {
            position: "top",
            attrs: {
                circle: {
                    r: 8,
                    magnet: true,
                    fill: "#c8c8c8",
                    style: {
                        visibility: "hidden",
                    },
                }
            },
        },
        out: {
            position: "bottom",
            attrs: {
                circle: {
                    r: 8,
                    magnet: true,
                    fill: "#c8c8c8",
                    style: {
                        visibility: "hidden",
                    },
                }
            },
        },
    },
    items: [
        {
            id: "in-port",
            group: "in",
        },
        {
            id: "out-port",
            group: "out",
        },
    ],
};

Graph.registerNode(
    "custom-task",
    {
        inherit: "rect",
        width: 150,
        height: 50,
        attrs: {
            body: {
                strokeWidth: 2,
                stroke: "red",
            },
            text: {
                fontSize: 12,
                fill: "#262626",
            },
        },
        ports: { ...ports },
    },
    true
);

Graph.registerNode(
    "custom-userAction",
    {
        inherit: "polygon",
        width: 90,
        height: 80,
        attrs: {
            body: {
                strokeWidth: 2,
                stroke: "red",
                refPoints: "0,10 10,0 20,10 10,20",
            },
            text: {
                fontSize: 12,
                fill: "#262626",
            },
        },
        ports: { ...ports },
    },
    true
);

Graph.registerNode(
    "custom-scriptAction",
    {
        inherit: "circle",
        width: 65,
        height: 65,
        attrs: {
            body: {
                strokeWidth: 2,
                stroke: "red",
            },
            text: {
                fontSize: 12,
                fill: "#262626",
            },
        },
        ports: { ...ports },
    },
    true
);

Graph.registerNode(
    "custom-event",
    {
        inherit: "polygon",
        width: 85,
        height: 75,
        attrs: {
            body: {
                strokeWidth: 2,
                stroke: "red",
                refPoints: "0,15 10,5 20,15",
            },
            label: {
                refY: '90%',
                textVerticalAnchor: 'bottom',
                fontSize: 12,
            },
        },
        ports: { ...ports, items: [{id: 'in-port', group: 'in'}] },
    },
    true
);

Graph.registerNode(
    "custom-start",
    {
        inherit: "polygon",
        width: 85,
        height: 75,
        attrs: {
            body: {
                strokeWidth: 2,
                stroke: "red",
                refPoints: "20,10 10,15 0,10",
            }
        },
        ports: { ...ports, items: [{id: 'out-port', group: 'out'}] },
    },
    true
);

const stencil = new Addon.Stencil({
    title: "Workflow",
    target: graph,
    stencilGraphWidth: 400,
    stencilGraphHeight: 125,
    collapsable: true,
    groups: [
        {
            name: "task",
            title: "Task",
        },
        {
            name: "useraction",
            title: "UserAction",
            graphHeight: 220,
            layoutOptions: {
                rowHeight: 100
            }
        },
        {
            name: "scriptaction",
            title: "Script Action",
        },
        {
            name: "event",
            title: "Event",
        },
    ],
});

document.getElementById("stencilCanvas").appendChild(stencil.container);

const task1 = graph.createNode({
    shape: "custom-task",
    label: "Script Task",
    data: { group: "task", action: "scriptTask", name: 'Script Task', templateName: 'Script Task' },
});
const task2 = graph.createNode({
    shape: "custom-task",
    label: "User Task",
    attrs: { body: { stroke: "green" } },
    data: { group: "task", action: "userTask", name: 'User Task', templateName: 'User Task' },
});
const userAction1 = graph.createNode({
    shape: "custom-userAction",
    label: "Approve",
    attrs: { body: { stroke: "green" } },
    data: { group: "useraction", action: "userAction-approve", name: 'Approve', templateName: 'Approve' },
});
const userAction2 = graph.createNode({
    shape: "custom-userAction",
    label: "Reject",
    data: { group: "useraction", action: "userAction-reject", name: 'Reject', templateName: 'Reject' },
});
const userAction3 = graph.createNode({
    shape: "custom-userAction",
    label: "Save",
    attrs: { body: { stroke: "black" } },
    data: { group: "useraction", action: "userAction-save", name: 'Save', templateName: 'Save' },
});
const scriptAction1 = graph.createNode({
    shape: "custom-scriptAction",
    label: "False",
    data: { group: "scriptaction", action: "scriptAction-false", name: 'False', templateName: 'False' },
});
const scriptAction2 = graph.createNode({
    shape: "custom-scriptAction",
    label: "True",
    attrs: { body: { stroke: "green" } },
    data: { group: "scriptaction", action: "scriptAction-false", name: 'True', templateName: 'True' },
});
const event1 = graph.createNode({
    shape: "custom-event",
    label: "Cancel",
    data: { group: "event", action: "event-cancel", name: 'Cancel', templateName: 'Cancel' },
});
const event2 = graph.createNode({
    shape: "custom-event",
    label: "Completed",
    attrs: { body: { stroke: "green" } },
    data: {  group: "event", action: "event-completed", name: 'Completed', templateName: 'Completed' },
});

stencil.load([task1, task2], "task");
stencil.load([userAction1, userAction2, userAction3], "useraction");
stencil.load([scriptAction1, scriptAction2], "scriptaction");
stencil.load([event1, event2], "event");

const startNode = graph.createNode({
    shape: 'custom-start',
    attrs: { body: { stroke: "green" } },
    position: {
        x: 500,
        y: 100
    },
    data: { dataType: 'start', action: "start", name: 'Start', templateName: 'Start' },
});

graph.addNode(startNode);

const nodeConfigMap = {
    Start: { shape: "custom-start", data: { action: "start" }, color: "green", showLabel: false },
    "User Task": {
        shape: "custom-task",
        data: { action: "userTask" },
        color: "green",
        showLabel: true,
    },
    "Script Task": {
        shape: "custom-task",
        data: { action: "scriptTask" },
        color: "red",
        showLabel: true,
    },
    Approve: {
        shape: "custom-userAction",
        data: { action: "userAction-approve" },
        color: "green",
        showLabel: false,
    },
    Reject: {
        shape: "custom-userAction",
        data: { action: "userAction-reject" },
        color: "red",
        showLabel: false,
    },
    Save: {
        shape: "custom-userAction",
        data: { action: "userAction-save" },
        color: "black",
        showLabel: false,
    },
    False: {
        shape: "custom-scriptAction",
        data: { action: "scriptAction-false" },
        color: "red",
        showLabel: false,
    },
    True: {
        shape: "custom-scriptAction",
        data: { action: "scriptAction-true" },
        color: "green",
        showLabel: false,
    },
    Cancel: {
        shape: "custom-event",
        data: { action: "event-cancel" },
        color: "red",
        showLabel: false,
    },
    Completed: {
        shape: "custom-event",
        data: { action: "event-cancel" },
        color: "green",
        showLabel: false,
    },
};

const formatToX6 = (workflow) => {
    const formattedNodes = [];
    const formattedEdges = [];

    workflow.flowEditor.objects.forEach((object) => {
        const config = nodeConfigMap[object.templateName];

        const taskActionData = workflow.tasks.find((task) => task.id === object.id);
        let data;

        if (taskActionData) {
            data = {
                ...config.data,
                ...taskActionData,
                templateName: object.templateName,
                name: taskActionData.title,
            };
        } else {
            data = {
                ...config.data,
                ...object,
            };
        }

        const node = graph.createNode({
            id: object.id,
            shape: config.shape,
            label: config.showLabel ? object.name : "",
            data,
            position: {
                x: object.posX - 100,
                y: object.posY,
            },
            attrs: {
                body: {
                    stroke: config.color,
                },
            },
        });

        formattedNodes.push(node);
    });

    workflow.flowEditor.connections.forEach((connection) => {
        const edge = graph.createEdge({
            id: connection.id,
            source: {
                cell: connection.sourceNode,
                port: "out-port",
            },
            target: {
                cell: connection.targetNode,
                port: "in-port",
            },
        });

        formattedEdges.push(edge);
    });

    const cells = [...formattedNodes, ...formattedEdges];
    return cells;
};

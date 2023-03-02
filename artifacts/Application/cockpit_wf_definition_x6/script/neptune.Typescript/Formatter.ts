const nodeConfigMap = {
    Start: { shape: "custom-start", color: "green", showLabel: false },
    "User Task": {
        shape: "custom-task",
        color: "green",
        showLabel: true,
    },
    "Script Task": {
        shape: "custom-task",
        color: "red",
        showLabel: true,
    },
    Approve: {
        shape: "custom-userAction",
        color: "green",
        showLabel: false,
    },
    Reject: {
        shape: "custom-userAction",
        color: "red",
        showLabel: false,
    },
    Save: {
        shape: "custom-userAction",
        color: "black",
        showLabel: false,
    },
    False: {
        shape: "custom-scriptAction",
        color: "red",
        showLabel: false,
    },
    True: {
        shape: "custom-scriptAction",
        color: "green",
        showLabel: false,
    },
    Cancel: {
        shape: "custom-event",
        color: "red",
        showLabel: false,
    },
    Completed: {
        shape: "custom-event",
        color: "green",
        showLabel: false,
    },
};

const formatToX6 = (workflow) => {
    const formattedNodes = [];
    const formattedEdges = [];

    workflow.flowEditor.objects.forEach((element) => {
        const config = nodeConfigMap[element.templateName];

        const taskActionData = workflow.tasks.find((task) => task.id === element.id);
        let data;

        if (taskActionData) {
            data = {
                ...config.data,
                templateName: element.templateName,
            };
        } else {
            data = {
                ...config.data,
                ...element,
            };
        }

        const taskMarkup = [
                {
                    tagName: "rect",
                    selector: "body",
                },
                {
                    tagName: "text",
                    selector: "text",
                    className: 'nodeLabel'
                },
            ];

        const node = graph.createNode({
            id: element.id,
            shape: config.shape,
            label: config.showLabel ? element.name : "",
            data,
            position: {
                x: element.posX - 100,
                y: element.posY,
            },
            attrs: {
                body: {
                    stroke: config.color,
                },
            },
        });

        if (config.shape === 'custom-task') {
            node.setMarkup(taskMarkup)
        }

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

    return [...formattedNodes, ...formattedEdges];
};

namespace TaskNode {
    export const definition = {
        name: "custom-task",
        options: {
            inherit: "rect",
            width: 150,
            height: 50,
            markup: [
                {
                    tagName: "rect",
                    selector: "body",
                },
                {
                    tagName: "text",
                    selector: "text",
                },
            ],
            ports: { ...Ports.ports },
        },
        overwrite: true,
    };

    export function getNode(templateName: string) {
        const border = templateName === "User Task" ? "border-green" : "border-red";
        return graph.createNode({
            shape: "custom-task",
            label: templateName,
            markup: [
                {
                    tagName: "rect",
                    selector: 'body',
                    className: [border],
                },
                {
                    tagName: "text",
                    selector: "text",
                    className: "nodeLabel",
                },
            ],
            data: {
                group: "task",
                templateName,
            },
        });
    }
}

namespace ScriptActionNode {
    export const definition = {
        name: "custom-scriptAction",
        options: {
            inherit: "circle",
            width: 65,
            height: 65,
            markup: [
                {
                    tagName: "circle",
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

    export function getNode(templateName) {
        const border = templateName === "True" ? "border-green" : "border-red";
        return graph.createNode({
            shape: "custom-scriptAction",
            label: templateName,
            markup: [
                {
                    tagName: "circle",
                    selector: "body",
                    className: [border],
                },
                {
                    tagName: "text",
                    selector: "text",
                    className: "nodeLabel",
                },
            ],
            data: {
                group: "scriptaction",
                templateName: templateName,
            },
        });
    }
}

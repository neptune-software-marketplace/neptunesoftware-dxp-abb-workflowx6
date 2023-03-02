namespace EventNode {
    export const definition = {
        name: "custom-event",
        options: {
            inherit: "polygon",
            width: 85,
            height: 75,
            markup: [
                {
                    tagName: "polygon",
                    selector: "body",
                },
                {
                    tagName: "text",
                    selector: "text",
                },
            ],
            attrs: {
                body: {
                    refPoints: "0,15 10,5 20,15",
                },
                label: {
                    //refY: "150%",
                    //textVerticalAnchor: "bottom",
                },
            },
            ports: { ...Ports.ports, items: [{ id: "in-port", group: "in" }] },
        },
        overwrite: true,
    };

    export function getNode(templateName: string) {
        const border = templateName === "Completed" ? "border-green" : "border-red";
        return graph.createNode({
            shape: "custom-event",
            label: templateName,
            markup: [
                {
                    tagName: "polygon",
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
                group: "event",
                templateName: templateName,
            },
        });
    }
}

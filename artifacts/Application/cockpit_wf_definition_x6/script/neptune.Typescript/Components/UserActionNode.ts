namespace UserActionNode {
    export const definition = {
        name: "custom-userAction",
        options: {
            inherit: "polygon",
            width: 90,
            height: 80,
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
                    refPoints: "0,10 10,0 20,10 10,20",
                },
            },
            ports: { ...Ports.ports },
        },
        overwrite: true,
    };

    export function getNode(templateName: string) {
        const border =
            templateName === "Approve"
                ? "border-green"
                : templateName === "Reject"
                ? "border-red"
                : "border-black";

        return graph.createNode({
            shape: "custom-userAction",
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
                group: "useraction",
                templateName: templateName,
            },
        });
    }
}

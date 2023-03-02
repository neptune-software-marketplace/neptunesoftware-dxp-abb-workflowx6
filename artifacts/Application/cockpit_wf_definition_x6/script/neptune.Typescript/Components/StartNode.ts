namespace StartNode {
    export const definition = {
        name: "custom-start",
        options: {
            inherit: "polygon",
            width: 85,
            height: 75,
            markup: [
                {
                    tagName: "polygon",
                    selector: "body",
                },
            ],
            attrs: {
                body: {
                    refPoints: "20,10 10,15 0,10",
                },
            },
            ports: { ...Ports.ports, items: [{ id: "out-port", group: "out" }] },
        },
        overwrite: true,
    };

    export function getNode() {
        return graph.createNode({
            shape: "custom-start",
            markup: [
                {
                    tagName: "polygon",
                    selector: "body",
                    className: ['border-green'],
                }
            ],
            position: {
                x: 500,
                y: 100,
            },
            data: { dataType: "start", templateName: "Start" },
        });
    }
}

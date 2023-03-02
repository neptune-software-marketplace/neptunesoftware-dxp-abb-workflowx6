const graphConfig = {
    height: "100%",
    width: "100%",
    connecting: {
        router: {
            name: "manhattan",
            args: {
                startDirections: ["bottom"],
                endDirections: ["top"],
            },
        },
        connector: {
            name: "rounded",
            args: {
                radius: 2,
            },
        },
        anchor: "center",
        connectionPoint: "anchor",
        allowBlank: false,
        snap: {
            radius: 20,
        },
        createEdge() {
            return new Shape.Edge(edgeConfig);
        },
        validateConnection: function (this, args) {
            return args.targetPort == "in-port";
        },
    },
};

const edgeConfig = {
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
};

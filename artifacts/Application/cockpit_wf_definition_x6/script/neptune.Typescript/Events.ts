graph.on("node:mouseenter", () => {
    const ports = container.querySelectorAll(".x6-port-body");
    Ports.toggleVisibility(ports, true);
});
graph.on("node:mouseleave", () => {
    const ports = container.querySelectorAll(".x6-port-body");
    Ports.toggleVisibility(ports, false);
});

graph.on("node:click", ({ e, x, y, node, view }) => {
    setSelectedNode(node, e, x, y, view);
});

graph.on("node:added", ({ node }) => {
    setSelectedNode(node);
});

graph.on("blank:click", () => {
    removeNodeSelection();
});

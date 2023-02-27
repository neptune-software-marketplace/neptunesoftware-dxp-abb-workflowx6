// Select node
const setSelectedNode = (node, e = null, x = "", y = "", view = null) => {
    const nodeData = node.getData();
    removeNodeSelection();
    node.setAttrs({
        body: {
            strokeDasharray: "4",
        },
    });
    modelSelectedNodeData.setData({ node, view, e, x, y, data: nodeData });
    const selectedNode = modelSelectedNodeData.getData();
    if (nodeData.dataType !== "scriptAction") {
        modelformDetails.setData(selectedNode);
        formDetails.setVisible(true);
    }
    if (nodeData.action === "userTask") {
        modelformUserTask.setData(selectedNode);
        formUserTask.setVisible(true);
    } else {
        formUserTask.setVisible(false);
    }

    console.log("selectedNode");
    console.log(selectedNode);

    oTitleSelected.setText(selectedNode.data.templateName);
};

const removeNodeSelection = () => {
    const allNodes = graph.getNodes();
    allNodes.forEach((node) => {
        node.removeAttrByPath("body/strokeDasharray");
    }, false);
    modelSelectedNodeData.setData({});
    formDetails.setVisible(false);
    formUserTask.setVisible(false);
    oTitleSelected.setText();
};

const deleteElement = () => {
    const selectedNode = modelSelectedNodeData.getData();
    if (selectedNode && selectedNode.data.action !== "start") {
        graph.removeNode(selectedNode.node);
        removeNodeSelection();
    }
};

const togglePorts = (ports, show) => {
    for (let i = 0; i < ports.length; i++) {
        ports[i].style.visibility = show ? "visible" : "hidden";
    }
};

const updateData = (updatedData) => {
    const selectedNode = modelSelectedNodeData.getData();
    selectedNode.node.updateData(updatedData);
};

const clearEditor = () => {
    if (graph) {
        graph.resetCells([startNode]);
        oPage.setTitle("Workflow editor");
        removeNodeSelection();
    }
};

const displayWorkflow = () => {
    clearEditor();
    const x6Workflow = formatToX6(dummyData);
    console.log(x6Workflow);
    graph.resetCells(x6Workflow);
    oPage.setTitle(dummyData.title);
};

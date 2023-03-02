function setSelectedNode(node, e = null, x = "", y = "", view = null) {
    const nodeData = node.getData();
    removeNodeSelection();
    if (!view) {
        view = graph.findView(node);
    }
    view.addClass("border-dashed");
    modelSelectedNode.setData({ node, view, e, x, y, data: nodeData });
    const selectedNode = modelSelectedNode.getData();
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

    oTitleSelected.setText(selectedNode.data.templateName);
}

function removeNodeSelection() {
    const allNodes = graph.getNodes();
    allNodes.forEach((node) => {
        const view = graph.findView(node);
        view.removeClass("border-dashed");
    }, false);
    modelSelectedNode.setData({});
    formDetails.setVisible(false);
    formUserTask.setVisible(false);
    oTitleSelected.setText();
}

function deleteElement() {
    const selectedNode = modelSelectedNode.getData();
    if (selectedNode && selectedNode.data.action !== "start") {
        graph.removeNode(selectedNode.node);
        removeNodeSelection();
    }
}

function updateData(updatedData) {
    const selectedNode = modelSelectedNode.getData();
    selectedNode.node.updateData(updatedData);
}

function clearEditor() {
    if (graph) {
        graph.resetCells([StartNode.getNode()]);
        oPage.setTitle("Workflow editor");
        removeNodeSelection();
    }
}

function displayWorkflow() {
    clearEditor();
    const x6Workflow = formatToX6(dummyData);
    graph.resetCells(x6Workflow);
    oPage.setTitle(dummyData.title);
}

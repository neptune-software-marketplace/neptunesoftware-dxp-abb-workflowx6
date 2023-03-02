// @ts-ignore
const { Graph, Shape, Node, Addon, View } = X6;
const container = document.getElementById("graphCanvas");

const graph = new Graph({container, ...graphConfig});

Graph.registerNode(TaskNode.definition.name, TaskNode.definition.options, TaskNode.definition.overwrite);
Graph.registerNode(UserActionNode.definition.name, UserActionNode.definition.options, UserActionNode.definition.overwrite);
Graph.registerNode(ScriptActionNode.definition.name, ScriptActionNode.definition.options, ScriptActionNode.definition.overwrite);
Graph.registerNode(EventNode.definition.name, EventNode.definition.options, EventNode.definition.overwrite);
Graph.registerNode(StartNode.definition.name, StartNode.definition.options, StartNode.definition.overwrite);

Stencil.init(graph);

graph.addNode(StartNode.getNode());

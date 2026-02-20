import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";
//new nodes
import { ApiNode } from "./nodes/apiNode";
import { MathNode } from "./nodes/mathNode";
import { ConditionNode } from "./nodes/conditionNode";
import { TranslatorNode } from "./nodes/translatorNode";
import { DelayNode } from "./nodes/delayNode";
import "reactflow/dist/style.css";
import { NODE_TYPES_ENUM } from "./constants/node-types";
import { DeletableEdge } from "./components/deletable-edge";
const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
    [NODE_TYPES_ENUM.INPUT]: InputNode,
    [NODE_TYPES_ENUM.LLM]: LLMNode,
    [NODE_TYPES_ENUM.OUTPUT]: OutputNode,
    [NODE_TYPES_ENUM.TEXT]: TextNode,
    [NODE_TYPES_ENUM.API]: ApiNode,
    [NODE_TYPES_ENUM.MATH]: MathNode,
    [NODE_TYPES_ENUM.CONDITION]: ConditionNode,
    [NODE_TYPES_ENUM.TRANSLATE]: TranslatorNode,
    [NODE_TYPES_ENUM.DELAY]: DelayNode,
};
const edgeTypes = {
    deletable: DeletableEdge,
};
const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    getNodeID: state.getNodeID,
    addNode: state.addNode,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
});

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {
        nodes,
        edges,
        getNodeID,
        addNode,
        onNodesChange,
        onEdgesChange,
        onConnect,
    } = useStore(selector, shallow);

    const getInitNodeData = (nodeID, type) => {
        return {
            id: nodeID,
            customName: nodeID,
            nodeType: `${type}`,
            variables: [],
        };
    };

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const reactFlowBounds =
                reactFlowWrapper.current.getBoundingClientRect();
            if (event?.dataTransfer?.getData("application/reactflow")) {
                const appData = JSON.parse(
                    event.dataTransfer.getData("application/reactflow")
                );
                const type = appData?.nodeType;

                // check if the dropped element is valid
                if (typeof type === "undefined" || !type) {
                    return;
                }

                const position = reactFlowInstance.project({
                    x: event.clientX - reactFlowBounds.left,
                    y: event.clientY - reactFlowBounds.top,
                });

                const nodeID = getNodeID(type);
                const newNode = {
                    id: nodeID,
                    type,
                    position,
                    data: getInitNodeData(nodeID, type),
                };

                addNode(newNode);
            }
        },
        [reactFlowInstance, getNodeID, addNode]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }, []);

    return (
        <>
            <div
                ref={reactFlowWrapper}
                style={{ width: "100wv", height: "70vh" }}
            >
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    onInit={setReactFlowInstance}
                    nodeTypes={nodeTypes}
                    proOptions={proOptions}
                    snapGrid={[gridSize, gridSize]}
                    connectionLineType="deletable"
                    zoomOnScroll={false}
                    panOnScroll={true}
                    panOnDrag={true}
                    edgeTypes={edgeTypes}
                >
                    <Background color="#aaa" gap={gridSize} />
                    <Controls />
                    <MiniMap />
                </ReactFlow>
            </div>
        </>
    );
};

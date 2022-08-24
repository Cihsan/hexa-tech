import React, { useState, useCallback, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow,
    applyEdgeChanges,
    applyNodeChanges
} from 'react-flow-renderer';
import TextUpdaterNode from './TextUpdaterNode.js';

import './WorkFLow.css';
import SurveyQuizLanding from '../SurveyQuizLanding/SurveyQuizLanding.js';

const flowKey = 'example-flow';

const getNodeId = () => `randomnode_${+new Date()}`;

const initialNodes = [
    { id: '1', type: 'textUpdater', position: { x: 100, y: 100 } },
    { id: '2', type: 'textUpdater', position: { x: 100, y: 200 } }
];

const nodeTypes = { textUpdater: TextUpdaterNode };
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const WorkFlow = () => {
    const [nodes, setNodes] = useNodesState(initialNodes);
    const [edges, setEdges] = useEdgesState(initialEdges);
    const [rfInstance, setRfInstance] = useState(null);
    const { setViewport } = useReactFlow();
    const componentRef = useRef();


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );



    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
    const onSave = useCallback(() => {
        if (rfInstance) {
            const flow = rfInstance.toObject();
            localStorage.setItem(flowKey, JSON.stringify(flow));
        }
    }, [rfInstance]);

    const onRestore = useCallback(() => {
        const restoreFlow = async () => {
            const flow = JSON.parse(localStorage.getItem(flowKey));

            if (flow) {
                const { x = 0, y = 0, zoom = 1 } = flow.viewport;
                setNodes(flow.nodes || []);
                setEdges(flow.edges || []);
                setViewport({ x, y, zoom });
            }
        };

        restoreFlow();
    }, [setNodes, setViewport]);

    const onAdd = useCallback((data) => {
        const newNode = {
            id: getNodeId(),
            type: 'textUpdater',
            position: {
                x: Math.random() * window.innerWidth - 100,
                y: Math.random() * window.innerHeight,
            },
        };
        setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);


    return (
        <div>
            <div className='workFlow-container'>
                <div className="save__controls mt-20 mr-3">
                    <button className="hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none" onClick={onAdd}>Add node</button>
                    <button className="hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none" onClick={onSave}>save</button>
                    <button className="hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none" onClick={onRestore}>Store</button>
                    <button
                        onClick={handlePrint}
                        className="hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none ml-5">Print</button>
                </div>
                <div style={{ height: 600 }} ref={componentRef}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setRfInstance}
                        nodeTypes={nodeTypes}
                        fitView
                    >
                    </ReactFlow>
                </div>
            </div>
            <SurveyQuizLanding></SurveyQuizLanding>
        </div>
    );
};

export default () => (
    <ReactFlowProvider><WorkFlow /></ReactFlowProvider>
);

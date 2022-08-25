import React, { useState, useCallback, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow,
    MiniMap,
    Controls
} from 'react-flow-renderer';

import './WorkFLow.css';

const flowKey = 'example-flow';

const getNodeId = () => `randomnode_${+new Date()}`;

const initialNodes = [
    { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 } },
    { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const WorkFlow = () => {



        const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
        const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
        const [rfInstance, setRfInstance] = useState(null);
        const { setViewport } = useReactFlow();
        const componentRef = useRef();


        const handlePrint = useReactToPrint({
            content: () => componentRef.current,
        });


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
        let nodetext
        const onAdd = useCallback(() => {

            const newNode = {

                id: getNodeId(),
                data: { label: 'Added node' },
                position: {
                    x: Math.random() * window.innerWidth - 100,
                    y: Math.random() * window.innerHeight,

                },

            };

            setNodes((nds) => nds.concat(newNode));
        }, [setNodes]);


        return (
            <div className='workFlow-container'>
                <div className="save__controls mt-20 mr-3">
                    <button className="btn hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none" onClick={onAdd}>Add node</button>
                    <button className="btn hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none" onClick={onSave}>save</button>
                    <button className="btn hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none" onClick={onRestore}>Store</button>
                    <button
                        onClick={handlePrint}
                        className=" btn hover:bg-primary rounded bg-purple-600 text-white font-bold hover:bg-none ml-5">Print</button>
                </div>
                <div style={{ height: 600 }} ref={componentRef}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setRfInstance}
                    >
                        <MiniMap />
                        <Controls />
                    </ReactFlow>
                </div>
                
            </div>
        );
    };

    export default () => (
        <ReactFlowProvider><WorkFlow /></ReactFlowProvider>
    );
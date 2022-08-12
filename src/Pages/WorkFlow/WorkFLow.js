// import React, { useState, Fragment } from 'react';

// import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';

// const initialElements = [
//     { id: '1', type: 'input', data: { label: 'Mind Node' }, position: { x: 0, y: 0 } }
// ]
// const onLoad = (reactFlowInstance) => {
//     reactFlowInstance.fitView();
// }

// const WorkFlow = () => {
//     const [elements, setElements] = useState(initialElements);
//     const [name, setName] = useState("")

//     const addNode = () => {
//         setElements(e => e.concat({
//             id: (e.length + 1).toString(),
//             data: { label: `${name}` },
//             position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }
//         }));
//     };

//     const onConnect = (params) => setElements(e => addEdge(params, e));

//     return (
//         <Fragment>
//             <ReactFlow
//                 elements={elements}
//                 onLoad={onLoad}
//                 style={{ width: '100%', height: '90vh' }}
//                 onConnect={onConnect}
//                 connectionLineStyle={{ stroke: "#ddd", strokeWidth: 2 }}
//                 connectionLineType="bezier"
//                 snapToGrid={true}
//                 snapGrid={[16, 16]}
//             >
//                 <Background
//                     color="#888"
//                     gap={16}
//                 />
//                 <MiniMap
//                     nodeColor={n => {
//                         if (n.type === 'input') return 'blue';

//                         return '#FFCC00'
//                     }} />
//                 <Controls />
//             </ReactFlow>

//             <div>
//                 <input type="text"
//                     onChange={e => setName(e.target.value)}
//                     name="title" />
//                 <button
//                     type="button"
//                     onClick={addNode}
//                 >Add Node</button>
//             </div>
//         </Fragment>
//     )
// }

// export default WorkFlow;







import React from 'react';
import ReactFlow from 'react-flow-renderer';


function App() {
  const elements = [
    { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
    { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
    { id: '3', data: { label: <div>Node 3</div> }, position: { x: 200, y: 200 } },
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '2', target: '3', animated: false },
  ];



  return (
    <div style={{ width: "700px", height: "500px" }}>
      <ReactFlow elements={elements} />
    </div>
  );
}

export default App;
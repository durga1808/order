import React, { useEffect } from 'react'
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { spanData } from '../../../../global/MockData/SpanData';

const SpanFlow = () => {


  useEffect(() => {
    const mockSpanData = spanData;
  }, [])


  const edges = [{ id: 'e1', source: '1', target: '2' }, { id: 'e2', source: '1', target: '3' }];

  const nodes = [
    {
      id: '1',
      data: {
        labels: [
          { label: 'POST' },
          { label: '123456666'  },
        ],
      },
      position: { x: 0, y: 0 },
      type: 'input',
    },
    {
      id: '2',
      data: { name: 'World' },
      position: { x: 100, y: 100 },
    },
    {
      id: '3',
      data: { name: 'New World' },
      position: { x: 300, y: 100 },
    },
  ];

  const edgeOptions = {
    animated: true,
  };

  return (
    <div style={{ height: "350px", width: "100%" }} >
      <ReactFlow nodes={nodes} edges={edges} defaultEdgeOptions={edgeOptions} >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default SpanFlow
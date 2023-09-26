import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./MetricLayout.css";

function MetricLayout() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 2 },
    { i: "b", x: 2, y: 0, w: 6, h: 2 },
    { i: "c", x: 4, y: 0, w: 2, h: 2 },
    { i: "d", x: 0, y: 2, w: 2, h: 2 },
    { i: "aa", x: 0, y: 0, w: 2, h: 2 },
    { i: "bb", x: 2, y: 0, w: 2, h: 2 },
    { i: "cc", x: 4, y: 0, w: 2, h: 2 },
    { i: "dd", x: 0, y: 2, w: 6, h: 3 },
  ];

  return (
    <div className="scrollable-container">
      <div className="resizable-grid-layout-container">
        <GridLayout
          className="layout"
          layout={layout}
          cols={6}
          rowHeight={100}
          width={1200}
          isResizable={true}
        >

          <div key="a" className="grid-item">
            A
          </div>
          <div key="b" className="grid-item">
            B
          </div>
          <div key="c" className="grid-item">
            C
          </div>
          <div key="d" className="grid-item">
            D
          </div>
          <div key="aa" className="grid-item">
            AA
          </div>
          <div key="bb" className="grid-item">
            BB
          </div>
          <div key="cc" className="grid-item">
            CC
          </div>
          <div key="dd" className="grid-item">
            DD
          </div>
        </GridLayout>
      </div>
    </div>
  );
}

export default MetricLayout;

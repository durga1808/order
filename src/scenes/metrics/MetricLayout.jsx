import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css"; // Import the default styles
import "react-resizable/css/styles.css"; // Import the default resizable styles
import "./MetricLayout.css"; // Import your custom CSS styles

function MetricLayout() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 2 },
    { i: "b", x: 2, y: 0, w: 2, h: 2 },
    { i: "c", x: 4, y: 0, w: 2, h: 2 },
  ];

  return (
    <div className="scrollable-container">
      <div className="resizable-grid-layout">
        <GridLayout
          className="layout"
          layout={layout}
          cols={6}
          rowHeight={100}
          width={1200}
          isResizable={true} // Enable resizing
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
        </GridLayout>
      </div>
    </div>
  );
}

export default MetricLayout;

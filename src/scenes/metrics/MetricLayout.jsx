import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./MetricLayout.css";
import LineChart from "./charts/LineChart";

function MetricLayout() {
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 5, h: 2 } // You can adjust the layout parameters
  ]);

  // Function to handle grid item resize
  const handleResize = (layout, oldItem, newItem) => {
    // Update the layout state with the new item size
    setLayout(layout);
  };

  return (
    <div className="scrollable-container">
      <div className="resizable-grid-layout-container">
        <GridLayout
          className="layout"
          layout={layout}
          cols={6}
          rowHeight={150}
          width={1300}
          autoSize={true}
          isResizable={true}
        >

          <div key="a" className="card-style">
            <LineChart height={250} />
          </div>
        </GridLayout>
      </div>
    </div>
  );
}

export default MetricLayout;

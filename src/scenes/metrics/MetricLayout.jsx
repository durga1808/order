import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./MetricLayout.css";
import LineChart from "./charts/LineChart";

function MetricLayout() {
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 5, h: 3 } // You can adjust the layout parameters
  ]);

  const [chartHeight, setChartHeight] = useState(250); // Initial height

  // Function to update the chart height when the layout is resized
  const handleResize = () => {
    // Calculate the new height based on the layout and the number of rows
    const numRows = Math.max(...layout.map(item => item.y + item.h), 0);
    const newHeight = numRows * 150; // Assuming each row is 150px in height
    setChartHeight(newHeight);
  };

  // // Listen for layout changes and update the chart height
  // useEffect(() => {
  //   handleResize();
  // }, [layout]);

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
          // onResize={handleResize} // Call the resize handler on layout resize
        >

          <div key="a" className="card-style">
            <LineChart updateHeight={handleResize} height={chartHeight}/>
          </div>
        </GridLayout>
      </div>
    </div>
  );
}

export default MetricLayout;

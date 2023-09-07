import React from "react";
import TraceTopBar from "./TraceTopBar";
import TraceList from "./TraceList";

const Traces = () => {
  return (
    <div>
      <TraceTopBar />
      <div style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
        <TraceList />
      </div>
    </div>
  );
};

export default Traces;

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

  // const condition =layout.map((items)=>{
  //   if(items.i==="dd"&&items.w ===6&&items.h===3){
  //     return false;

  //   }else{
  //     return true;
  //   }

  // console.log(items.w,"www");
  // })

  // console.log("condition----------------------",condition);

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
              {/* {layout.map((item) => (
                <div key={item.i} className="grid-item" data-grid={item}>
                  {item.i}
                  {item.i === "dd" ? <ResizableContent /> : <NonResizableContent />}
                </div>
              ))} */}

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
            <p>
              D Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              quibusdam id ullam ad quidem odio corporis quos repellendus
              impedit incidunt reiciendis unde laborum, quas eius natus quam
              corrupti harum . Rem? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Debitis quis unde, eaque iusto harum eum placeat
              perspiciatis, ex id esse nulla error velit dolore asperiores
              reprehenderit sint ad temporibus vero.D Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Sed quibusdam id ullam ad
              quidem odio corporis quos repellendus impedit incidunt reiciendis
              unde laborum, quas eius natus quam corrupti harum . Rem? Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Debitis quis
              unde, eaque iusto harum eum placeat perspiciatis, ex id esse nulla
              error velit dolore asperiores reprehenderit sint ad temporibus
              vero.D Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sed quibusdam id ullam ad quidem odio corporis quos repellendus
              impedit incidunt reiciendis unde laborum, quas eius natus quam
              corrupti harum . Rem? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Debitis quis unde, eaque iusto harum eum placeat
              perspiciatis, ex id esse nulla error velit dolore asperiores
              reprehenderit sint ad temporibus vero.D Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Sed quibusdam id ullam ad
              quidem odio corporis quos repellendus impedit incidunt reiciendis
              unde laborum, quas eius natus quam corrupti harum . Rem? Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Debitis quis
              unde, eaque iusto harum eum placeat perspiciatis, ex id esse nulla
              error velit dolore asperiores reprehenderit sint ad temporibus
              vero.
            </p>
          </div>
        </GridLayout>
      </div>
    </div>
  );
}

export default MetricLayout;

import { Card } from "@mui/material";
import React from "react";
import { useState } from "react";
import './CustomFlow.css'
import { MdHttp } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";

const CustomFlow = ({ spandata }) => {
  const [spanName,setspanname]=useState([]);

  console.log("spandata", spandata);
  console.log("spandnames",spanName);

  const searchString='GET';




  // const spandata = [
  //   { spans: { name: "GET /orders/getOrders" } },
  //   { spans: { name: "SELECT * FROM orders" } },
  //   { spans: { name: "observability-demo-tables" } },
    
  // ];

  const arr = ["GET", "SELECT", "ORDER", "PUT"];

  return (
    <div>
      <Card sx={{ height: "calc(60vh - 32px)", padding: "10px" }}>
      {spandata.map((span, index) => {
        const spanName = span.spans.name

       


         // Display Kafka icon only if both "thread.id" and "thread.name" are present
          
          const attributes = span.spans.attributes || [];



          const hasThreadID = attributes.some(
            (attr) => attr.key === "thread.id"
          );
          const hasThreadName = attributes.some(
            (attr) => attr.key === "thread.name"
          );

          const isKafka = hasThreadID && hasThreadName && attributes.length === 2;


          const isHTTP = attributes.some(
            (attr) => attr.key.includes("http.method")
          );
          // const isKafka = attributes.some(
          //   (attr) => attr.key.includes
          // );
          const isDatabase = attributes.some(
            (attr) => attr.key.includes("db")
          );

          return (
            <div key={index} className="circle" >
              {isHTTP && (
                // Render HTTP icon
                <MdHttp style={{ color: "white" ,backgroundColor:"gray",fontSize:"40px",padding:"8px",borderRadius:"50px"}} />
              )}
              {isDatabase && (
                // Render Database icon
                <FaDatabase style={{ color: "white" ,backgroundColor:"gray",fontSize:"40px",padding:"8px",borderRadius:"50px"}}  />
              )}
               {isKafka && (
                // Render Database icon
                <SiApachekafka style={{ color: "white" ,backgroundColor:"gray",fontSize:"40px",padding:"8px",borderRadius:"50px"}} />
              )}
              {/* <p>{spanName}</p> */}
            </div>



          );
        })}
      </Card>
    </div>
  );
};



 



//   return (
//     <div>
//       <Card sx={{ height: "calc(60vh - 32px)", padding: "10px" }}>
//         {spandata.map((span, index) => {
//           // setspanname(span.spans.name)
//           // setspanname(span.spans.name);

          
//         })}



        
//       </Card>
//     </div>
//   );
// };

export default CustomFlow;

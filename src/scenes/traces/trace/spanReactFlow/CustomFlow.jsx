import { Card } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./CustomFlow.css";
import { MdHttp } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";
import { PiBracketsRoundBold } from "react-icons/pi";

const CustomFlow = ({ spandata }) => {
  const [spanName, setspanname] = useState([]);

  console.log("spandata", spandata);
  console.log("spandnames", spanName);

  const searchString = "GET";

  // const spandata = [
  //   { spans: { name: "GET /orders/getOrders" } },
  //   { spans: { name: "SELECT * FROM orders" } },
  //   { spans: { name: "observability-demo-tables" } },

  // ];

  const arr = ["GET", "SELECT", "ORDER", "PUT"];

  return (
    <div>
      <Card sx={{ height: "calc(60vh - 32px)", padding: "10px",overflowY:"scroll" }}>
        {spandata.map((span, index) => {
          const spanName = span.spans.name;

          // Display Kafka icon only if both "thread.id" and "thread.name" are present

          const attributes = span.spans.attributes || [];

          const hasThreadID = attributes.some(
            (attr) => attr.key === "thread.id"
          );
          const hasThreadName = attributes.some(
            (attr) => attr.key === "thread.name"
          );
          const hasCodenamspace = attributes.some(
            (attr) => attr.key === "code.namespace"
          );
          const hasCodefunction = attributes.some(
            (attr) => attr.key === "code.function"
          );
          const hasCodeuser = attributes.some(
            (attr) => attr.key === "user-id"
          );

          const isFunction =
            hasThreadID && hasThreadName && attributes.length === 2 ||  hasThreadID &&
            hasCodenamspace &&
            hasCodefunction &&
            hasThreadName &&
            attributes.length === 4 ||  hasThreadID &&
            hasCodenamspace &&
            hasCodefunction &&
            hasThreadName &&
            hasCodeuser&&
            attributes.length ===5||
            hasCodeuser&&
            hasThreadName &&
            hasThreadID&&
            attributes.length ===3



          // const isFunction2 =
          //   hasThreadID &&
          //   hasCodenamspace &&
          //   hasCodefunction &&
          //   hasThreadName &&
          //   attributes.length === 4;

          const isHTTP = attributes.some((attr) =>
            attr.key.includes("http.method")
          );
          const isKafka = attributes.some((attr) =>
            attr.key.includes("message")
          );
          const isDatabase = attributes.some((attr) => attr.key.includes("db"));

          return (
            <div key={index} className="circle">
              {isHTTP && (
                // Render HTTP icon
                <MdHttp
                  style={{
                    color: "white",
                    backgroundColor: "gray",
                    fontSize: "40px",
                    padding: "8px",
                    borderRadius: "50px",
                  }}
                />
              )}
              {isDatabase && (
                // Render Database icon
                <FaDatabase
                  style={{
                    color: "white",
                    backgroundColor: "gray",
                    fontSize: "40px",
                    padding: "8px",
                    borderRadius: "50px",
                  }}
                />
              )}
              {isKafka && (
                // Render Database icon
                <SiApachekafka
                  style={{
                    color: "white",
                    backgroundColor: "gray",
                    fontSize: "40px",
                    padding: "8px",
                    borderRadius: "50px",
                  }}
                />
              )}

              {isFunction && (
                // Render Database icon
                <PiBracketsRoundBold
                  style={{
                    color: "white",
                    backgroundColor: "gray",
                    fontSize: "40px",
                    padding: "8px",
                    borderRadius: "50px",
                  }}
                />
              )}

              {/* {isFunction2 && (
                // Render Database icon
                <PiBracketsRoundBold
                  style={{
                    color: "white",
                    backgroundColor: "gray",
                    fontSize: "40px",
                    padding: "8px",
                    borderRadius: "50px",
                  }}
                />
              )} */}

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

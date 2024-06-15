import React from "react";

function ComponentA({ data, setData }) {
  return (
    <div>
      <h2>Component A</h2>
      <p>Data: {data}</p>
      <button onClick={() => setData("Data from Component A")}>
        Update Data
      </button>
    </div>
  );
}

export default ComponentA;

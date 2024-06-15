import React from "react";

function ComponentB({ data, setData }) {
  return (
    <div>
      <h2>Component B</h2>
      <p>Data: {data}</p>
      <button onClick={() => setData("Data from Component B")}>
        Update Data
      </button>
    </div>
  );
}

export default ComponentB;

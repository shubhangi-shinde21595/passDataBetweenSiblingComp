import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function ParentComponent() {
  const [data, setData] = useState("Initial Data");

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/component-a">Component A</Link>
            </li>
            <li>
              <Link to="/component-b">Component B</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/component-a"
            element={<ComponentA data={data} setData={setData} />}
          ></Route>
          <Route
            path="/component-b"
            element={<ComponentB data={data} setData={setData} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default ParentComponent;

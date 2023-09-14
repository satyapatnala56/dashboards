import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./pages/DashBoard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts/Posts";

const Child = (props) => {
  useEffect(() => {
    console.log("child1");
  });
  useEffect(() => {
    console.log("child2");
  }, []);
  return <></>;
};

function App() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    console.log("parent");
  });

  return (
    <Fragment>
      <Child />
      <BrowserRouter>{val}</BrowserRouter>
      <button onClick={() => setVal((prev) => prev + 1)}>sd</button>
    </Fragment>
  );
}

export default App;

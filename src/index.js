import React from "react";
import ReactDom from "react-dom";

const App = () => {
    return <div>Hello React, webpack 4 & Babel 7!</div>;
};

ReactDom.render(<App />, document.querySelector("#root"));
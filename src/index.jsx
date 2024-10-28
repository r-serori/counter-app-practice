import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// このファイルは触らないでください。
root.render(<Counter />);

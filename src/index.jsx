import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import './stylesheets/styles.scss';


// const App = () => {
//     return <h1>here I am</h1>;
// }

const root = createRoot(document.getElementById("root"));
root.render(<App />);

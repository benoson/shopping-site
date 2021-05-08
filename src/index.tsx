import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App.component";
import Header from "./components/header/Header.component";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

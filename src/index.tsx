import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home/Home.component";
import Header from "./components/header/Header.component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <div className="main-sections">
          <Route path="/home" component={Home} exact />
          <Redirect from="/" to="home" exact />
        </div>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import Home from "../home/Home.component";
import Header from "../header/Header.component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./app.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <div className="main-sections">
            <Route path="/home" component={Home} exact />
            <Redirect from="/" to="home" exact />
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

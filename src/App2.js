import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import App from "./App";
import Auth from "./Auth";
import "./App.css";

function App2() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <App />
                </Route>
                <Route path="/Login">{<Auth />}</Route>
                <Route path="/Admin/*" exact>
                    <Admin />
                </Route>
                <Route path="/Admin" exact>
                    <Admin />
                </Route>
            </Switch>
        </Router>
    );
}

export default App2;

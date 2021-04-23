import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Tweetes from '../components/Tweetes';

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login} />
            <Route path="/home" exact component={Tweetes} />
        </Switch>
    </Router>
);
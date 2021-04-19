import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tweetes from '../components/Tweetes';
import Home from '../components/Home';
import SignUp from '../components/SignUp';

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Tweetes} />
            <Route path="/signup" exact component={SignUp} />
        </Switch>
    </Router>
);
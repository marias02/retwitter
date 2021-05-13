import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Logout from '../components/UserBox';
import Tweets from '../components/Tweets';

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login} />
            <Route path="/login" exact component={Logout} />
            <Route path="/home" exact component={Tweets} />
        </Switch>
    </Router>
);
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Login from '../components/login/login';
import Logout from '../components/UserBox';
import Tweets from '../components/Tweets';

export default (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/login" component={Logout} />
            <Route exact path="/home" component={Tweets} />
        </Switch>
    </Router>
);
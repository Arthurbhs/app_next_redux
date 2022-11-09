import React from "react";
import { Route, Router, Redirect, hashHistory } from "react-router";

import Todo from "../todo/Todo";
import About from "../about/About";

export default props => (
    <Router history={hashHistory}>
     <Route path='/todos' component={Todo}/>
     <Route path='/about' component={About}/>
     <Redirect from='*' to='/todos' />
    </Router>
)
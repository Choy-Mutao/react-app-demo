import React from 'react';
import { Route, Redirect } from 'react-router';
import { HashRouter, Switch } from 'react-router-dom';

import TodoList from '../pages/TodoList/index';

const Routes = () => (
    <HashRouter>
        <div>
            <Route exact path="/" render={() => <Redirect to="/home" />}/>
            <Switch>
                <Route path="/tododemo" component={TodoList} />
            </Switch>
        </div>
    </HashRouter>
)

const App = () => (
    <Routes /> 
)

export default App;
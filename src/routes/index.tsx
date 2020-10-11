import React from 'react';
import { Switch, Route }  from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import EmployedFrom from '../pages/EmployedForm';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={EmployedFrom}/>
        <Route path="/dashboard" component={Dashboard}/>
    </Switch>
)

export default Routes

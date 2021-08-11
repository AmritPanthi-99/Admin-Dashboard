import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import DocumentReview from '../pages/DocumentReview';
import VehicleDetails from '../pages/VehicleDetails';
import Driver from '../pages/Driver';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/documentreview' component={DocumentReview}/>
            <Route path='/users' component={Users}/>
            <Route path='/vehicledetails' component={VehicleDetails}/>
            <Route path='/driverdetails' component={Driver}/>
        </Switch>
    )
}

export default Routes

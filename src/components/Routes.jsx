import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';
import DocumentReview from '../pages/DocumentReview';
import VehicleDetails from '../pages/VehicleDetails';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/documentreview' component={DocumentReview}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/vehicledetails' component={VehicleDetails}/>
        </Switch>
    )
}

export default Routes

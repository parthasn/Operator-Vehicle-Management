import React from 'react';
import { Route } from 'react-router-dom';
import EditVehicle from './Dashboard/EditVehicle'
import Register from './Register';
import Login from './Login';
import LandingPage from './Dashboard/LandingPage';
import TripsPage from './Trips/TripsPage'
import EditTrip from './Trips/EditTrip'


function Routes() {
    
    return (
        <div>
            <Route path="/register" component={Register} />
            <Route path="/" component={Login} />
            <Route path="/landingPage" exact render={(props) => <LandingPage {...props}/>}/>
            <Route path="/trips/:id" exact render={(props) => <TripsPage {...props} />} />
            <Route path = "/editVehicle/:id" exact render = {(props) => <EditVehicle {...props}/>}/>
            <Route path = "/editTrip/:id" exact render = {(props) => <EditTrip {...props}/>}/>
        </div>
    );
}
export default Routes;

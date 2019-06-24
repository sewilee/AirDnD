import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';

import Modal from './modal/modal';
import Splash from './pages/splash';
import Landing from './pages/landing';
import Show from './pages/show'
import Filtered from './pages/filtered';
import Trips from './pages/trips';
import Payment from './pages/payment';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return (
        <div className="main">
            <Modal />
            <Switch>
                <ProtectedRoute path="/campaigns" component={Trips} />
                <ProtectedRoute path="/listings/:id/payment/:type" component={Payment} />
                <Route path="/search/:type" component={Filtered}/>
                <Route path="/search" component={Filtered}/>
                <Route path="/listings/:id" component={Show} />
                <Route path="/listings" component={Landing}/>
                <Route exact path ="/" component={Splash}/>
            </Switch>
        </div>
    );
};

export default App;

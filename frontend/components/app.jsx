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

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return (
        <div className="main">
            <Modal />
            <div>
                <Switch>
                    <Route path="/listings/:id" component={Show} />
                    <Route path="/listings" component={Landing}/>
                    <Route exact path ="/" component={Splash}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;

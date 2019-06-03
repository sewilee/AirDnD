import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';

import Modal from './modal/modal';
import Splash from './pages/splash';
import Landing from './pages/landing';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return (
        <div>
            <Modal />
            <div>
                <Switch>
                    <Route path="/api/listings" component={Landing}/>
                    <Route exact path ="/" component={Splash}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;

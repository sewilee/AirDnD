import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import Landing from './pages/landing/landing';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return (
        <div>
            <Modal />
            <div>
                <Landing/>
            </div>
        </div>
    )
}

export default App;

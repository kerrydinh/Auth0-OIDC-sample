import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Product from './product/Product';
import User from './user/User';
import Callback from './callback/Callback';
import Auth from './auth';
import history from './history';
import App from './App';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
    return (
        <Router history={history}>
          <div>
            <Route path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/product" render={(props) => <Product auth={auth} {...props} />} />
            <Route path="/user" render={(props) => <User auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }}/>
          </div>
        </Router>
    );
  }
  
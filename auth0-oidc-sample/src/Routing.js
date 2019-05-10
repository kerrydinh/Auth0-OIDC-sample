import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from './home/Home';
import User from './user/User';
import Callback from './callback/Callback';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Auth from './auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

class Routing extends Component {
    state = {}

    onLogin = event => {
        console.log('login');
        const auth = new Auth();
        auth.login();
    };

    onLogout() {
        auth.logout();
    }

    componentDidMount() {
        const { renewSession } = auth;

        if (localStorage.getItem('isLoggedIn') === 'true') {
            renewSession();
        }
    }

    render() {
        const isAuthenticated = auth.isAuthenticated();
        console.log(isAuthenticated);
        return (
            <BrowserRouter history={history}>
                <div>
                    <Navbar bg="light" expand="lg" className={{ border: '1px solid #ccc' }}>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/user">User</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Form inline>
                                { !auth.isAuthenticated() && (<Button onClick={this.onLogin}>Login</Button>)}
                                { auth.isAuthenticated() && (<Button onClick={this.onLogout}>Logout</Button>)}
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    <Switch>
                        <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                        <Route exact path="/user" render={(props) => <User auth={auth} {...props} />} />
                        <Route exact path="/callback" render={(props) => {
                            console.log(props);
                            handleAuthentication(props);
                            return <Callback {...props} /> 
                        }}/>
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default Routing;
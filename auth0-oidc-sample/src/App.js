import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar bg="light" expand="lg" className={{ border: '1px solid #ccc' }}>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/product">Product</Link>
          <Link className="nav-link" to="/user">User</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              {!isAuthenticated() && (<Button onClick={this.login.bind(this)}>Login</Button>)}
              {isAuthenticated() && (<Button onClick={this.logout.bind(this)}>Logout</Button>)}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;

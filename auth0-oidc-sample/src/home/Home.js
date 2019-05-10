
import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    state = {}

    render() {
        const opts = {
            height: '600',
            width: '1000',
            playerVars: {
                autoplay: 1
            }
        };

        return (
            <div className="home">
                <h1 style={{ textAlign: 'center' }}>Home Page</h1>
                {
                    this.props.auth.isAuthenticated() && (
                        <span>Authenticated</span>
                    )
                }
            </div>

        );
    }
}

export default Home;
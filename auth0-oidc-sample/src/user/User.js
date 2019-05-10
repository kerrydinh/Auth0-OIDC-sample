import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{ textAlign: 'center' }}>
                {
                    !this.props.auth.isAuthenticated() ? (
                        <span>Please login to see the user</span>
                    ) : (<span>User information</span>)
                }
            </div>
        );
    }
}
 
export default User;
import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner'

class CallBack extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{textAlign: 'center', paddingTop: '10%'}}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                <span style={{display: 'block'}}>Redirect to the application...</span>
            </div>
        );
    }
}
 
export default CallBack;
import React from 'react';
import {Form, FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/es/Button';
import {Prompt} from 'react-router-dom';

class AlertSuccess extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div style={{textAlign:'center'}}>
                <h1>alert created</h1>
            </div>

        );
    };
    
}

export default AlertSuccess;
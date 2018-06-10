import React from "react";
import {Link} from "react-router-dom";
import AlertSuccess from "./AlertSuccess";
import AlertFailed from "./AlertFailed";
import {Route} from 'react-router-dom';
import Button from "react-bootstrap/es/Button";

class CreateAlertForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    // onClick={this.onSubmit}
    // onClick={() => {  }}
    
    onSubmit(history) {
        console.log('onSubmit ', history);
        history.push("/createAlert/success");
    }
    render = () => {
        return (
            <div>
                <Route render={({ history}) => (
                    <Button className={'btn btn-primary'}
                            onClick={this.onSubmit.bind(this, history) }
                            >
                        Submit
                    </Button>
                    )} />
                <br/>
                
                <Link to={"/createAlert/success"}>Success</Link>
                {' | '}
                <Link to={"/createAlert/failed"}>Failed</Link>
                {' | '}
                <Link to={"/foobar"}>Main Foobar</Link>
                
                <div style={{backgroundColor:'green'}}>
                    Nested Component Route
                    <Route path={"/createAlert/success"} exact component={AlertSuccess} />
                    <Route path={"/createAlert/failed"} exact component={AlertFailed} />
                </div>
            </div>
        
        );
    };
}

export default CreateAlertForm;
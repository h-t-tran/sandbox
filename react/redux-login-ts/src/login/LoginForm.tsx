/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description: the presentation component.  Put only markup.  No TS or JS code
 *----------------------------------------------------------------------------*/

import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginFormContainer from "./LoginFormContainer";
import LoginSuccessResult from "./LoginSuccessResult";
import {Link} from "react-router-dom";
import {LOGIN_FAILED_STATUS_ROUTE, LOGIN_SUCCESS_STATUS_ROUTE} from "../utils/RouteConstants";
import LoginResult from "./LoginResult";
import LoginFailedResult from "./LoginFailedResult";



const LoginForm = ({ name, password, status, loggedIn, userNameChanged, passwordChanged, loginHandler }) => {
    let loggedInStr: string = loggedIn.toString();
    console.info("****** LoginForm render()");

    return <div>
        <h1>Please Login</h1>
        <br/>
        <label>Name:</label>
        <input type="text" value={name} onChange={userNameChanged}/>
        <br/>
        <label>Password:</label>
        <input type="text" value={password} onChange={passwordChanged}/>
        <br/>
        <div>Logged In: {loggedInStr} &nbsp;&nbsp;  Msg: {status}</div>
        <br/>
        <button onClick={loginHandler}>Login</button>
        {/* put the route for login status */}
        <div>
            <Route>
                <div style={{height:"100px"}}>
                    <Switch>
                        <Route path={LOGIN_SUCCESS_STATUS_ROUTE} component={LoginSuccessResult} exact/>
                        <Route path={LOGIN_FAILED_STATUS_ROUTE} component={LoginFailedResult} exact/>
                    </Switch>
                </div>
            </Route>
        </div>

    </div>;
}


export default LoginForm

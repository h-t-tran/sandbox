/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description: the presentation component.  Put only markup.  No TS or JS code
 *----------------------------------------------------------------------------*/

import * as React from 'react';


const LoginFormView = ({ name, password, status, loggedIn, userNameChanged, passwordChanged, loginHandler }) => {
    let loggedInStr: string = loggedIn.toString();
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

    </div>;
}


export default LoginFormView

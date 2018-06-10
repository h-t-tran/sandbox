/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description: the presentation component.  Put only markup.  No TS or JS code
 *----------------------------------------------------------------------------*/

import * as React from 'react';

const LoginFailedResult = ({ statusMsg }) => {
    return <div style={{backgroundColor:"red"}}>
        <h3>Login Failed:</h3>
        <button>ReTry</button>
    </div>;
};


export default LoginFailedResult;

/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description:
 *----------------------------------------------------------------------------*/

import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/ActionTypes";

function LoginReducer (state = { username: 'james', password: 'mypass' }, action) {
    console.log("*** LoginReducer state ", state, ", action ", action );
    let newState;
    switch (action.type) {
        case LOGIN_REQUEST:
            newState = {
                status: "Validating credential...."
            };
            break;

        case LOGIN_SUCCESS:
            newState = {
                status: "Logged in success!"
            };
            break;

        case LOGIN_FAILURE:
            newState = {
                status: "Logged in failed"
            };
            break;
        default:
            return state
    }

    return newState;
}

export default LoginReducer
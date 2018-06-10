/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description:
 *----------------------------------------------------------------------------*/

import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, FAKE_ACTION} from "../actions/ActionTypes";

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
                status: action.loggedInStatus.status, // "Logged in success!"
                loggedIn : action.loggedInStatus.loggedIn
            };
            break;

        case LOGIN_FAILURE:
            newState =  {
                status: action.loggedInStatus.status,
                loggedIn : action.loggedInStatus.loggedIn
            };
            break;

        case FAKE_ACTION:
            newState =  {
                // Hack...
                // Genernate some random data as it is needed to trigger a render of the route.
                // A new data value will cause mapStateToProps() to run and refresh the view and router
                fakeData: Math.random(),

                // for some reason spread operator "...state" doesn't work.  So extract each property.
                status: state.status,
                loggedIn : state.loggedIn
            };
            break;

        default:
            return state
    }

    return newState;
}

export default LoginReducer
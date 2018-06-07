/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description:
 *----------------------------------------------------------------------------*/

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/ActionTypes';
import AccessApi  from '../api/AccessApis'

export const loginSuccessActionFactory = (result) => {
    console.log("loginSuccessActionFactory action result ", result);

    return {
        type: LOGIN_SUCCESS,
        loggedInStatus: { status: result.msg, loggedIn : result.isLoggedIn }
    }
};

export const loginActionFactory = (user, password) => {
    console.log("loginActionFactory action ");

    if (!user || !password) {
        throw new Error('invalid credential, user and password required')
    }

    // return a function so that Thunk will trigger to invoke the async call.
    return function(dispatch) {
        return AccessApi.login(user, password).then((msg) => {
            // Tell thunk to trigger success action
            dispatch(loginSuccessActionFactory(msg));
        }).catch(error => {
            throw(error);
        });
    };

    // return {
    //     type: LOGIN_REQUEST,
    //     credential: { user, password }
    // }
}

/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description:
 *----------------------------------------------------------------------------*/

import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, FAKE_ACTION} from "../actions/ActionTypes";
import AccessApi  from '../api/AccessApis'
import {LoginResponseData, default as IAccessApi} from "../api/IAccessApis";

/**
 * request login
 * @param user
 * @param password
 * @param api
 * @returns {(dispatch) => Promise<void>}
 */
export const loginActionFactory = (user : string, password : string, api : IAccessApi) => {
    console.log("loginActionFactory action ");

    if (!user || !password) {
        throw new Error('invalid credential, user and password required')
    }

    // return a function so that Thunk will trigger to invoke the async call.
    return function(dispatch) {
        return api.login(user, password).then((rsp) => {
            // Tell thunk to trigger success action
            if (rsp.isLoggedIn === true) {
                dispatch(loginSuccessActionFactory(rsp));
            }
            else {
                dispatch(loginFailedActionFactory(rsp));
            }
        }).catch(error => {
            dispatch(loginFailedActionFactory( error ));
        });
    };
};


export const loginSuccessActionFactory = (result : LoginResponseData) => {
    console.log("loginSuccessActionFactory action result ", result);
    return {
        type: LOGIN_SUCCESS,
        loggedInStatus: { status: result.msg, loggedIn : result.isLoggedIn }
    };
};

export const loginFailedActionFactory = (result : LoginResponseData) => {
    console.log("loginFailedActionFactory action result ", result);
    return {
        type: LOGIN_FAILURE,
        loggedInStatus: { status: result.msg, loggedIn : result.isLoggedIn }
    };
};

export const fakeActionFactory = () => {
    console.log("fakeActionFactory action");
    return function(dispatch) {
        dispatch( { type: FAKE_ACTION, loggedInStatus: { status:"a", loggedIn:false }});
    };
};
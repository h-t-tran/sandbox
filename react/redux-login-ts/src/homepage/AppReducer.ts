/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description: group all the reducers together.
 *----------------------------------------------------------------------------*/

import { combineReducers } from 'redux'

import LoginReducer from '../login/LoginReducer'

const AppReducer = combineReducers({
    login: LoginReducer,
    /* Other reducers here */
});

export default AppReducer
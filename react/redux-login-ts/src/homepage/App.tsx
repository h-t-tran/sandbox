/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description:
 *----------------------------------------------------------------------------*/

import * as React from "react";
import "./../assets/scss/App.scss";
import LoginFormContainer from "../login/LoginFormContainer";
import AppReducer from "./AppReducer";
import { createStore, applyMiddleware } from 'redux'
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

let store = createStore(
    AppReducer,
    applyMiddleware(thunk)
    //applyMiddleware(thunk, reduxImmutableStateInvariant())
);


const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
    /* specify any properties we want to pass into the app */
}

/**
 * Main App component. Replace LoginForm with project-specified component(s)
 */
export default class App extends React.Component<AppProps, undefined> {

    constructor(props: AppProps){
        super(props);
        this._onLoginCallback = this._onLoginCallback.bind(this);
    }

    private _onLoginCallback(name : string) {
        console.log('LoginCallback: User ', name, " is logged in");
    }
    render() {
        return (
            <div className="app">
                <h1>React Typescript Seed Project</h1>
                <img src={reactLogo} height="100"/>
                <LoginFormContainer store={store} onLoginSuccessful={this._onLoginCallback} />
            </div>
        );
    }
}


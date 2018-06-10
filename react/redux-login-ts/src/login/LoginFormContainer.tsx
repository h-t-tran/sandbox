/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description: The container component using the *View
 *----------------------------------------------------------------------------*/

import * as React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { bindActionCreators } from 'redux';
import {fakeActionFactory, loginActionFactory} from "./LoginAction";
import AccessApisMock  from '../api/AccessApisMock'
import AccessApis  from '../api/AccessApis'
import IAccessApis  from '../api/IAccessApis'
import {Link} from "react-router-dom";
import LoginResult from "./LoginResult";
import { withRouter } from 'react-router-dom';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {LOGIN_FAILED_STATUS_ROUTE, LOGIN_SUCCESS_STATUS_ROUTE} from "../utils/RouteConstants";
export interface LoginProps {
    username: string;
    password?: string;
    onLoginSuccessful(user: string): void;

    // need this to pacify the TS compiler when we use this: this.props.store.  Is there a better way to do this?
    store: any,
    history: any
}

class LoginData {
    username: string;
    password?: string;
    //status?: string
}



/**
 * the view component for displaying login
 */
class LoginFormContainer extends React.Component<LoginProps, undefined> {
    // use _myProps instead of super.props for typesafe
    private _state : LoginData = new LoginData();
    private _history: any = null;
    private _isLoggedInSuccess : boolean = false;

    private _api : IAccessApis = new AccessApisMock();  // mock svc
    //private _api : IAccessApis = new AccessApis();  // real svc

    constructor(props: LoginProps){
        super(props);

        console.log("*** LoginForm ctor props ", props);
        this._history = props.history;

        //let state = this.props.store.getState();

        // Question?
        // When I attempt to use this.state inherited from React.Component, TS complains.
        //  [at-loader] Checking finished with 2 errors
        //      [at-loader] ./src/login/LoginFormContainer.tsx:43:9
        //  TS2532: Object is possibly 'undefined'.
        // this.state.username = props.username;

        this._state.username = props.username;
        this._state.password = props.password;
        //this._state.status = "not login";

        this._onUserNameChanged = this._onUserNameChanged.bind(this);
        this._onPasswordChanged = this._onPasswordChanged.bind(this);
    }

    componentDidMount () {
        console.log('componentDidMount');
    }

    componentWillUnmount () {
        console.log('componentWillMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps nextProps ', nextProps);
        this._handleLoginResult(nextProps.loggedIn);
    }


    _handleLoginResult(isLoggedIn) {
        if(this._isLoggedInSuccess !== isLoggedIn) {
            if(isLoggedIn) {
                this._history.push(LOGIN_SUCCESS_STATUS_ROUTE);
            }
            else {
                this._history.push(LOGIN_FAILED_STATUS_ROUTE);
            }
            this._isLoggedInSuccess = isLoggedIn;

            this.props.store.dispatch(fakeActionFactory());


            // TEST CODE
            // Attempting to change the route in here doesn't work.
            // For some reason, we need to invoke the store.dispatch() in order for it to
            // trigger the mapStateToProps() then the route will render.
            // If we don't call dispatch(), the URL in the browser changed, but the route doesn't render
            // the first time, but will render the 2nd and subsequent time.
            //const self = this;
            //self.props.store.dispatch(loginActionFactory(self._state.username, self._state.password, self._api));

        }
    }
    _loginHandler() {
        console.log('Login in: name ', this._state.username, ", password ", this._state.password);
        //this._history.push(LOGIN_FAILED_STATUS_ROUTE);
        this.props.store.dispatch(loginActionFactory(this._state.username, this._state.password, this._api));
        this.props.onLoginSuccessful(this._state.username);

        // *** TEST code ****
        // Using setimeout to test change the route outside of the "UI thrd context" doesn't work.
        // However, if self.props.store.dispatch(...) is called, then the route is handled correctly
        // Why do we need to call dispatch()???  There must be a way to change the route asynchronously.
        // const self = this;
        // setTimeout(function() {
        //     self._history.push(LOGIN_FAILED_STATUS_ROUTE);
        //     self.props.store.dispatch(loginActionFactory(self._state.username, self._state.password, self._api));
        // }, 4000);
    }

    /**
     * Handler for user name change
     * @param e {Object} the event
     */
    _onUserNameChanged(e: any) {
        if(this._state.username !== e.target.value) {
            this._state.username = e.target.value;
            this.setState({ username: this._state.username });
        }
    }

    _onPasswordChanged(e: any) {
        if(this._state.password !== e.target.value) {
            this._state.password = e.target.value;
            this.setState({ password: this._state.password });
        }
    }

    render() {
        // get the login status from the store.  Is this a good design??  There is probably a cleaner way.
        let state = this.props.store.getState();
        let loginStatusMsg : string = state.login.status || "--";
        let isLoggedIn : boolean = state.login.loggedIn || false;
        //console.info("****** LoginFormContainer render()");
        return (
            <div>
                <LoginForm name={this._state.username}
                               password={this._state.password}
                               status={loginStatusMsg}
                               loggedIn={isLoggedIn}
                               passwordChanged={this._onPasswordChanged}
                               userNameChanged={this._onUserNameChanged}
                               loginHandler={this._loginHandler.bind(this)}
                />

            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log("*** mapStateToProps: state ", state, ", props ", props);


    return {
        username: state.login.username,
        password: state.login.password,
        status: state.login.status || 'NA',
        loggedIn : state.login.loggedIn,

        // this is needed to trigger the route refresh
        // We need something that is different so that React will detect the delta and render the route.
        //fakeData1 : (new Date()).getTime() //state.login.fakeData
        fakeData : state.login.fakeData || ''
    };
};


const mapDispatchToProps = (dispatch, props) => bindActionCreators({ loginActionFactory }, dispatch)

// decorate the LoginFormContainerr with 'withRouter' so we can get access to the 'history' object
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginFormContainer));


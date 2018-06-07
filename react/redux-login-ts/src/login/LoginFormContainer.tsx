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
import {loginActionFactory} from "./LoginAction";

export interface LoginProps {
    username: string;
    password?: string;
    onLoginSuccessful(user: string): void;

    // need this to pacify the TS compiler when we use this: this.props.store
    store: any
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


    constructor(props: LoginProps){
        super(props);

        console.log("*** LoginForm ctor props ", props);
        //let state = this.props.store.getState();

        // Question?
        // When I attempt to use this.state inherited from React.Component, TS complains.
        //  [at-loader] Checking finished with 2 errors
        //      [at-loader] ./src/login/LoginFormContainer.tsx:43:9
        //  TS2532: Object is possibly 'undefined'.
        // this.state.username = props.username;


        this._state.username = props.username;
        this._state.password = props.password;

        this._onUserNameChanged = this._onUserNameChanged.bind(this);
        this._onPasswordChanged = this._onPasswordChanged.bind(this);
    }

    componentDidMount () {
        console.log('componentDidMount');
    }

    componentWillUnmount () {
        console.log('componentWillMount');
    }

    _loginHandler(str : string) {
        console.log('Login in: name ', this._state.username, ", password ", this._state.password);
        this.props.store.dispatch(loginActionFactory(this._state.username, this._state.password));
        this.props.onLoginSuccessful(this._state.username);
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
        let loginStatusMsg : string = state.login.status || '--';

        return (
            <div>
                <LoginForm name={this._state.username}
                               password={this._state.password}
                               status={loginStatusMsg}
                               passwordChanged={this._onPasswordChanged}
                               userNameChanged={this._onUserNameChanged}
                               loginHandler={this._loginHandler.bind(this, 'abc')}
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
        status: state.login.status || 'NA'
    };
};

const mapDispatchToProps = (dispatch, props) => bindActionCreators({ loginActionFactory }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);


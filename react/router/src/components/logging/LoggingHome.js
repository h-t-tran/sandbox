import React from 'react';
import {Link, Route} from 'react-router-dom';
import LoggingDefaultMessage from './LoggingDefaultMessage';
import LoggingLink from './LoggingLink';
import Foobar from '../Foobar';
import Foobar2 from '../Foobar2';
import LoggingRoute from './LoggingRoute';
import Lorem from './Lorem';
import Login from "../secure/Login";
import PageNotFound from "../PageNotFound";
import Logout from "../secure/Logout";

const LoggingHome = ({match}) => {
    console.log('${match.url}/part1 = ', `${match.url}/part1`);
    
    // IMPORTANT: we need the /logging part in here b/c this component is related to the url resource 'logging'
    // since our nested lives within this component, it need to have "/logging" prefix.
    // if we just do "/part1" it's going to uses the route defined in App
    //      <Route path={'/part1'} component={Logout}/>
    //      <Route component={PageNotFound}/>
    //  </Switch>
    
    let part1Url = '/logging/part1';
    let part2Url = '/logging/part2';
    return (
        <div>
            <h1>Logging Home</h1>
            <h4>
                <Link to={`${match.url}/lorem/12d2a0f4-29ea-4650-803a-67418b597090`}>Link 1</Link>
                {' | '}
                <Link to={`${match.url}/lorem/7842a9f0-449d-499f-bd19-36106da591fa`}>Link 2</Link>
                <br/>
                <Link to={'/part1'}>Part1 in App.js (Create Alert)</Link>
                {' | '}
                <Link to={part1Url}>In Nested Foobar</Link>
                {' | '}
                <Link to={part2Url}>In Nested Foobar2</Link>
            </h4>

            <LoggingRoute path={`${match.url}/lorem/:eid`} component={Lorem} />
            
            <div style={{backgroundColor:'yellow'}}>
                Nested Component Route
                <Route path={part1Url} exact component={Foobar} />
                <Route path={part2Url} exact component={Foobar2} />
            </div>
        </div>
    );

};

export default LoggingHome;
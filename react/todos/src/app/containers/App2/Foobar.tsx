/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description:
 *----------------------------------------------------------------------------*/

import * as React from "react";

export interface AppProps {
    /* specify any properties we want to pass into the app */
}

/**
 * Main App component. Replace LoginForm with project-specified component(s)
 */
export default class Foobar extends React.Component<AppProps, undefined> {

    constructor(props: AppProps){
        super(props);
    }

    render() {
        return (
                <div>
                    foobar
                </div>
        );
    }
}


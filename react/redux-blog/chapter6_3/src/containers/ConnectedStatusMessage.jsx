import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, {PropTypes} from 'react';

import StatusMessage from '../components/StatusMessage.jsx'

class ContainerStatusMessage extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log("ContainerStatusMessage ctor: props ", props);
  }

  /**
   * a simple wrapper around the real component
   * @returns {XML}
   */
  render() {
    return (
      <div>
        <StatusMessage label={this.props.label}  msg={this.props.statusMessageInputToView} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log("StatusMessage mapStateToProps(): state ", state, ", props ", props)
  return {
    // We can't do this since StatusMessage instance is created in connect()
    // <StatusMessage label='Post Result' statusMessageInputToView='hello'/>
    // Thus we have to create the properties to pass in and return it.
    statusMessageInputToView : state.createPostResult &&
                                state.createPostResult.msg ?
        state.createPostResult.msg : "default msg",

    // instead of trying to do this <StatusMessage label='Post Result' /> which doesn't work since
    // we are instantiation StatusMessage instance using connect()
    label: 'Post Result'
  }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContainerStatusMessage);

//const ConnectedStatusMessage = connect(mapStateToProps, mapDispatchToProps)(ContainerStatusMessage)
//export default ConnectedStatusMessage

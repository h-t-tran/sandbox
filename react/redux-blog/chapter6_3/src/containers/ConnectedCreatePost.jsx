import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CreatePost from '../components/CreatePost.jsx'
import { createPost } from '../actions'

const mapStateToProps = (state, props) => {
  console.debug("CreatePost mapStateToProps(): ")
  return {
    error: state.error && state.error.message,
    fooData : "fooData dummy"
  }
}


const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ createPost }, dispatch)

const ConnectedCreatePost = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default ConnectedCreatePost

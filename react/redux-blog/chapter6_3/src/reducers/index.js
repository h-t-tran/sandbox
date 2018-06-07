import { combineReducers } from 'redux'

import usersReducer from './users'
import postsReducer from './posts'
import filterReducer from './filter'
import loadingReducer from './loading'
import errorReducer from './error'
import statusMessageReducer from './statusMessage'

const appReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
  createPostResult: statusMessageReducer
})

export default appReducer

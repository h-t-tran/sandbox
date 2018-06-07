import {
  CREATE_POST, EDIT_POST, DELETE_POST, FETCH_POSTS_SUCCESS
} from '../actionTypes'

export default function statusMessageReducer (state = [], action) {
  console.log("statusMessageReducer state ", ...state);
  switch (action.type) {
    case CREATE_POST: {
      return { code: 999, msg : 'Successfully created' };
    }

    default:
      return state
  }
}

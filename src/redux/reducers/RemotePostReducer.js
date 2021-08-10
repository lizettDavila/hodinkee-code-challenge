import {
  REQUEST_FETCH_REMOTE_POSTS,
  FETCH_REMOTE_POSTS_SUCCESS,
  FETCH_REMOTE_POSTS_ERROR,
} from "../actions/fetchRemotePosts";

const initialState = {
  remotePosts: [],
};

const remotePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH_REMOTE_POSTS: {
      return {
        ...state,
        remotePosts: [],
      };
    }
    case FETCH_REMOTE_POSTS_SUCCESS: {
      return {
        ...state,
        remotePosts: action.remotePosts,
        processing: false,
        fetching: false,
        message: "",
        error: "",
      };
    }
    case FETCH_REMOTE_POSTS_ERROR: {
      return {
        ...state,
        remotePosts: [],
      };
    }

    default: {
      return state;
    }
  }
};

export default remotePostReducer;

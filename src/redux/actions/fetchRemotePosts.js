import RemotePostService from "../../services/RemotePostService";

export const REQUEST_FETCH_REMOTE_POSTS = "REQUEST_FETCH_REMOTE_POSTS";
export const FETCH_REMOTE_POSTS_SUCCESS = "FETCH_REMOTE_POSTS_SUCCESS";
export const FETCH_REMOTE_POSTS_ERROR = "FETCH_REMOTE_POSTS_ERROR";

function requestFetchRemotePosts() {
  return {
    type: REQUEST_FETCH_REMOTE_POSTS,
  };
}

function fetchRemotePostsSuccess(json) {
  return {
    type: FETCH_REMOTE_POSTS_SUCCESS,
    remotePosts: json,
  };
}

function fetchRemotePostsError() {
  return {
    type: FETCH_REMOTE_POSTS_ERROR,
    error: "Error",
  };
}

export function fetchRemotePosts() {
  return (dispatch) => {
    dispatch(requestFetchRemotePosts());
    return RemotePostService.getRemotePosts().then((json) => {
      if (json.status === 200) {
        dispatch(fetchRemotePostsSuccess(json.data));
      } else {
        dispatch(fetchRemotePostsError());
      }
    });
  };
}

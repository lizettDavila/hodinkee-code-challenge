import { combineReducers } from "redux";
import remotePostReducer from "./RemotePostReducer";

const rootReducer = combineReducers({
  remotePostReducer,
});

export default rootReducer;

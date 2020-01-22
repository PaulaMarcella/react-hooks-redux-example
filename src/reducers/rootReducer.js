import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counterReducer,
  todoReducer
});

export default rootReducer;

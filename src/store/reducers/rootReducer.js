import { combineReducers } from "redux";
import { filterReducer } from "./filterReducers";
import { taskReducer } from "./taskReducers";

export const rootReducer = combineReducers({
  taskState: taskReducer,
  filterState: filterReducer,
});

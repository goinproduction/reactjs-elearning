import { combineReducers } from "redux";
import CourseReducer from "./course";
const rootReducer = combineReducers({
  course: CourseReducer,
});

export default rootReducer;

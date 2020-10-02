import { combineReducers } from "redux";
import CourseReducer from "./course";
import UserReducer from "./user";
const rootReducer = combineReducers({
  course: CourseReducer,
  user: UserReducer,
});

export default rootReducer;

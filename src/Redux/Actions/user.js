import { createAction } from ".";
import { courseService } from "../../Services";
import { FETCH_COURSE_DETAIL, FETCH_COUSES } from "./type";

// asyc action
export const fetchCourses = () => {
  return (dispatch) => {
    courseService
      .fetchCourses()
      .then((res) => {
        dispatch(createAction(FETCH_COUSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchCourseDetail = () => {
  return (dispatch) => {
    courseService
      .fetchCourseDetail()
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => {});
  };
};

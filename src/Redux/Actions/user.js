import { createAction } from ".";
import { courseService } from "../../Services";
import { FETCH_COUSES } from "./type";

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

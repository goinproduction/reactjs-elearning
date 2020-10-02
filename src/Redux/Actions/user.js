import { createAction } from ".";
import { userService } from "../../Services";
import { FETCH_CREDENTIAL } from "./type";
// asyc action

export const login = (user) => {
  return (dispatch) => {
    userService
      .userSignIn(user)
      .then((res) => {
        dispatch(createAction(FETCH_CREDENTIAL, res.data));
        localStorage.setItem("credentials", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  };
};

import Axios from "axios";
import * as yup from "yup";

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Field is required!"),
  matKhau: yup.string().required("* Field is required!"),
  hoTen: yup.string().required("* Field is requried!"),
  email: yup
    .string()
    .required("* Field is required!")
    .email("* Email is invalid"),
  soDT: yup
    .string()
    .required()
    .matches(/^[0-9]+$/),
  maNhom: yup.string().required("* Field is required!"),
});

class UserService {
  userSignUp(data) {
    return Axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: data,
    });
  }
}
export default UserService;

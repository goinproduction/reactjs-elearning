import Axios from "axios";

class CourseService {
  fetchCourses() {
    return Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08",
    });
  }
  fetchCourseDetail() {
    return Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=basic-001",
    });
  }
}
export default CourseService;

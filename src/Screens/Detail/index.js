import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
class CourseDetailScreen extends Component {
  render() {
    return (
      <div>
        <img src={this.props.courseDetail.hinhAnh} />
        <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=basic-001",
    })
      .then((res) => {
        this.props.dispatch({
          type: "FETCH_COURSE_DETAIL",
          payload: res.data,
        });
      })
      .catch((err) => {});
  }
}
const mapStateToProps = (state) => ({
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});
export default connect(mapStateToProps, null)(CourseDetailScreen);

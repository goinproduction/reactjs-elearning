import React, { Component } from "react";
import { connect } from "react-redux";
import { courseService } from "../../Services";
import { createAction } from "../../Redux/Actions";
import { FETCH_COURSE_DETAIL } from "../../Redux/Actions/type";
import { fetchCourseDetail } from "../../Redux/Actions/user";
class CourseDetailScreen extends Component {
  render() {
    const { courseDetail } = this.props;
    return (
      <div>
        <img src={courseDetail.hinhAnh} />
        <h3>{courseDetail.tenKhoaHoc}</h3>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourseDetail());
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

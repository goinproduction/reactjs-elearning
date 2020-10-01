import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseDetail } from "../../Redux/Actions/course";
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
    this.props.dispatch(fetchCourseDetail(this.props.match.params.courseId));
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

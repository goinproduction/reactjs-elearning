import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems";
import Axios from "axios";
import { connect } from "react-redux";
class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh sách khóa học</h1>
        <div className="container">
          <div className="row">
            {this.props.courseList.map((item, index) => {
              return (
                <div className="col-md-3">
                  <CourseItem item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08",
    })
      .then((res) => {
        this.props.dispatch({
          type: "FETCH_COURSE",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => ({
  courseList: state.course.courses,
});
export default connect(mapStateToProps, null)(HomeScreen);

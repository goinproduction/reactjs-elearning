import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems";
import { connect } from "react-redux";
import { courseService } from "../../Services";
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
    courseService
      .fetchCourses()
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

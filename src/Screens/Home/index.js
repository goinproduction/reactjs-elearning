import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems";
import { connect } from "react-redux";
import { fetchCourses } from "../../Redux/Actions/course";
class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center font-wight-bold">
          Danh sách khóa học
        </h1>
        <div className="container">
          <div className="row">
            {this.props.courseList.map((item, index) => {
              return (
                <div className="col-md-3" key={index}>
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
    this.props.dispatch(fetchCourses());
  }
}
const mapStateToProps = (state) => ({
  courseList: state.course.courses,
});
export default connect(mapStateToProps, null)(HomeScreen);

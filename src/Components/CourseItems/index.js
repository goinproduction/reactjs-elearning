import React, { Component } from "react";

export default class CourseItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card p-2 mb-4">
        <img src={item.hinhAnh} style={{ width: "100%", height: 200 }} />
        <p className="lead font-weight-bold">{item.tenKhoaHoc}</p>
        <p className="lead">Instructor: {item.nguoiTao.hoTen}</p>
        <p className="lead">Rating: 5.0</p>
        <button className="btn btn-success">Go to Detail</button>
      </div>
    );
  }
}

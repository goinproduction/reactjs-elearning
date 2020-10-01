import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CourseItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card p-2 mb-4" style={{ height: "100%" }}>
        <img
          className="card-img-top"
          src={item.hinhAnh}
          style={{ width: "100%", height: 200 }}
        />
        <div className="card-body">
          <p className="lead font-weight-bold card-title">{item.tenKhoaHoc}</p>
          <small>
            <p className="lead card-text">
              <small>
                <span className="font-weight-bold">Ngày khởi tạo:</span>{" "}
                {item.ngayTao}
              </small>
            </p>
          </small>
        </div>
        <Link to={`/detail/${item.maKhoaHoc}`} className="btn btn-success">
          Go to Detail
        </Link>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class SigninScreen extends Component {
  render() {
    return (
      <form className="w-50 mx-auto">
        <h1>Đăng Nhập</h1>
        <div className="form-group">
          <label>Tài khoản</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input type="password" className="form-control" />
        </div>
        <butto className="btn btn-success">Đăng Nhập</butto>
      </form>
    );
  }
}

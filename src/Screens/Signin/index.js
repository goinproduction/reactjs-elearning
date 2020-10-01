import React, { Component } from "react";
import { Form, Formik, Field } from "formik";

export default class SigninScreen extends Component {
  handleSubmit = (value) => {
    console.log(value);
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <h3 className="text-center display-4">Đăng Nhập</h3>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
          }}
          onSubmit={this.handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài khoản</label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />
              </div>
              <div className="text-center">
                <button className="btn btn-success">Đăng Nhập</button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}

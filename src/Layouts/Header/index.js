import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/img/logo.png";
import classes from "./style.module.css";
import { connect } from "react-redux";
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-light mb-4">
          <a className="navbar-brand" href="#">
            <img src={Logo} className={classes.logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Trang Chủ
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              {this.props.credentials ? (
                <li className="nav-item">
                  <span className="nav-link">
                    Hi, {this.props.credentials.hoTen}
                  </span>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/sign-up" className="nav-link">
                      Đăng Ký
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/sign-in" className="nav-link">
                      Đăng Nhập
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    credentials: state.user.credentials,
  };
};
export default connect(mapStateToProps, null)(Header);

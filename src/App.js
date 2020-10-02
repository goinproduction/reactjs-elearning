import React, { Component } from "react";
import "./App.css";
import CourseDetailScreen from "./Screens/Detail";
import HomeScreen from "./Screens/Home";
import SignupScreen from "./Screens/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Layouts/Header";
import SigninScreen from "./Screens/Signin";
import { connect } from "react-redux";
import { createAction } from "./Redux/Actions";
import { FETCH_CREDENTIAL } from "./Redux/Actions/type";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/detail/:courseId" component={CourseDetailScreen} />
          <Route path="/sign-up" component={SignupScreen} />
          <Route path="/sign-in" component={SigninScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
  getCredentialFromLocal = () => {
    const credentialStr = localStorage.getItem("credentials");
    if (credentialStr) {
      this.props.dispatch(
        createAction(FETCH_CREDENTIAL, JSON.parse(credentialStr))
      );
    }
  };
  componentDidMout() {
    this.getCredentialFromLocal();
  }
}

export default connect()(App);

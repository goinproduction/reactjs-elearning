import React from "react";
import "./App.css";
import CourseDetailScreen from "./Screens/Detail";
import HomeScreen from "./Screens/Home";
import SignupScreen from "./Screens/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Layouts/Header";
import SigninScreen from "./Screens/Signin";

function App() {
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

export default App;

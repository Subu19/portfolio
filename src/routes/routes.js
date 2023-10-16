import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Education from "../Pages/Education";
// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//   },
//   {
//     path: "/home",
//     element: <Home></Home>,
//   },
//   {
//     path: "/projects",
//     element: <Projects></Projects>,
//   },
// ]);

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={"/"}>
          <Home></Home>
        </Route>
        <Route path={"/home"}>
          <Home></Home>
        </Route>

        <Route exact path={"/projects"}>
          <Projects></Projects>
        </Route>
        <Route exact path={"/projects/:id"}>
          <Projects></Projects>
        </Route>
        <Route exact path={"/education"}>
          <Education></Education>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

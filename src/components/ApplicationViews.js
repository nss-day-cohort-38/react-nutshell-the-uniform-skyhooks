import { Route, Redirect} from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";

const ApplicationViews = (props) => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;
    return (
      <React.Fragment>
        <Route path="/login" render={props => {
          return <Login setUser={setUser} {...props} />
        }} />
        <Route
          exact
          path="/ "
          render={props => {
            return <Home />;
          }}
        />
        <Route
        exact
        path="/tasks"
        render={props => {
          if (hasUser) {
            return <TaskList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/tasks/new"
        render={props => {
          if (hasUser) {
            return <TaskForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      </React.Fragment>
    );
  };
  
  export default ApplicationViews;
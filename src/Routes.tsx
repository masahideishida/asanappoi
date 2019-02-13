import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";

const Routes: React.SFC = () => {
  return (
    <Router>
      <div className="flex">
        <Route path="/list" component={TaskList} />
        <Route path="/list/:id" component={TaskDetail} />
      </div>
    </Router>
  );
};

export default Routes;

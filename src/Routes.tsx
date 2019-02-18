import * as React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from "./Header";
import Tasks from "./Tasks";

const Routes: React.SFC = () => {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <div>
          <Route path="/" component={Tasks} />
        </div>
      </Router>
    </React.Fragment>
  );
};

export default Routes;

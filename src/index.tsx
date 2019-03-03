import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/tailwind.css";
import Routes from "./Routes";
import { Store } from "redux";
import { store, IApplicationState } from "./Store";
import { Provider } from "react-redux";

interface IProps {
  store: Store<IApplicationState>;
}

const Root: React.FC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

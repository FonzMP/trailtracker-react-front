import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TrailsContainer from "./containers/TrailsContainer";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import manageTrails from "./reducers/trails_reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(manageTrails, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route exact path="/trails" component={TrailsContainer} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

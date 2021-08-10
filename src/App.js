import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Dashboard from "./containers/dashboard/Dashboard";
import configureStore from "./redux/store/configureStore";
import "./App.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Dashboard />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

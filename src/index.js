import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import Dashboard from "./components/dashboard";
import configureStore from "./store/configureStore";

const store = configureStore();

render(
    <Provider store={store}>
        <Dashboard />
    </Provider>,
    document.getElementById("app")
);
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootCompoment = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(rootCompoment, document.getElementById("root"));
serviceWorker.unregister();

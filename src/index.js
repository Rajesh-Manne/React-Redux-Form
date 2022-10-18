import React from "react";
import ReactDOM from "react-dom";

import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import contactReducer from "./redux/reducers/contactReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {createStore} from "redux";
import { Provider } from "react-redux";
const store = createStore(contactReducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
    <React.StrictMode>
      <Router>
      <App />
      </Router>
    </React.StrictMode>
  </Provider>
);



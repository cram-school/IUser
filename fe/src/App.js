import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store/index";
import './App.scss';
import SetUpRoutes from './router/index'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          { SetUpRoutes() }
        </div>
      </Provider>
    )
  }
}



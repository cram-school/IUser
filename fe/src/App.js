import React, { Component } from 'react';
import { connect } from "react-redux";
import { ConnectedRouter } from 'react-router-redux';
// import './App.scss';
import SetUpRoutes from './router/index'
export default class App extends Component {
  render() {
    return (
      <div className="app">
        { SetUpRoutes() }
      </div>
    )
  }
}



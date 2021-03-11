import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Component } from "react";
import Index from "../views/index";


export default function SetUpRoutes () {
  const routes = [
    {
      path: '/',
      exact: true,
      component: Index,
      //routes: []  子路由
    }
  ]
  return (<div><BrowserRouter>{renderRoutes(routes)}</BrowserRouter></div>)
}

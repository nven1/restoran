import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import MainHolder from "./views/MainHolder";
import Endpoints from "./confs/Endpoints";

function App() {
  //TODO render function with login authentication
  return (
    <BrowserRouter>
      <Route path={Endpoints.appEndpoints.root} render={MainHolder} />
    </BrowserRouter>
  );
}

export default App;

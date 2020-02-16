import React from "react";
import Header from "../components/Header/Header";
import "../App.scss";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Endpoints from "../confs/Endpoints";
import Footer from "../components/Footer/Footer";

interface MainHolderProps {}

const MainHolder: React.FC<MainHolderProps> = props => {
  const render = {
    header() {
      return <Header />;
    },
    footer() {
      return <Footer />;
    }
  };
  return (
    <div id="MainHolder">
      {render.header()}
      <Switch>
        <Route
          exact
          path={Endpoints.appEndpoints.root}
          render={p => <Landing {...p} />}
        />
      </Switch>
      {render.footer()}
    </div>
  );
};
export default MainHolder;

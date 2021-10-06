import { layoutRoute, normalRoute } from "./route";
import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "../App/App";
import Admin from "../layout/admin";
import Common from "../layout/common";

export default class RouterBox extends React.Component {
  render() {
    const getNormalRoute = () => {
      return normalRoute.map((item) => (
        <Route key={item.name} path={item.path} component={item.component} />
      ));
    };
    const getAdminRoute = () => {
      console.log("admin");
      return layoutRoute
        .filter((item) => item.layout === "admin")
        .map((item) => (
          <Route key={item.name} path={item.path} component={item.component} />
        ));
    };
    const getCommonRoute = () => {
      console.log("common");
      return layoutRoute
        .filter((item) => item.layout === "common")
        .map((item) => (
          <Route
            key={item.name}
            path={"/common" + item.path}
            component={item.component}
          />
        ));
    };

    return (
      <HashRouter>
        <App>
          <Switch>
            {getNormalRoute()}
            <Route
              path="/common"
              render={() => (
                <Common>
                  <Switch>{getCommonRoute()}</Switch>
                </Common>
              )}
            />
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>{getAdminRoute()}
                  <Redirect from="/*" to="/home" />
                  </Switch>
                </Admin>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

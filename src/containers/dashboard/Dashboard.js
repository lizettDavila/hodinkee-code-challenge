/* eslint-disable react/no-array-index-key */
import React from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Post
import { welcomeRoutes } from "../../routes/WelcomeRoutes";
import { remotePostRoutes } from "../../routes/RemotePostRoutes";
import { localPostRoutes } from "../../routes/LocalPostRoutes";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <main>
        {welcomeRoutes.map((route, i) => (
          <Route key={i} exact path={route.path} component={route.component} />
        ))}
        {remotePostRoutes.map((route, i) => (
          <Route key={i} exact path={route.path} component={route.component} />
        ))}
        {localPostRoutes.map((route, i) => (
          <Route key={i} exact path={route.path} component={route.component} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

import { Route } from "react-router-dom";
import React from "react";
import App from "pages/App";
import About from "pages/About";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={App} />
      <Route path="/about" exact component={About} />
    </>
  );
};

export default Routes;

import React from "react";
import "styles/header.css";
import { NavLink, useLocation } from "react-router-dom";
import * as logger from "utils/consoleLogger";
const Header = () => {
  const location = useLocation();
  logger.consoleLogData("location", location);
  return (
    <header className="header">
      <NavLink to="/brand" className="logo">
        Translater
      </NavLink>
      <div className="header-right">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="sharp">Shopping Site</h1>

      <div className="header-links">
        <Link to="/home">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/stats">Stats</Link>
      </div>
    </div>
  );
};

export default Header;

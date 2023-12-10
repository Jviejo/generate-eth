import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="d-flex gap-3">
      <div>
        <h2>eth</h2>
      </div>
      <div className="d-flex gap-3 mt-2">
        <Link to="/">Home</Link>
        <Link to="/net/list">List Networks</Link>
      </div>
    </div>
  );
}

export default Header;

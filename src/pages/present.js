import React from "react";
import { Link } from "gatsby";
import "../assets/css/style.css";

export default () => {
  return (
    <header>
      <Link class="present" to="/">
        no-class
      </Link>
      <br />
      <Link to="/present">yes-class</Link>
    </header>
  );
};

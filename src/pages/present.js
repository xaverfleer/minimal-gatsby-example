import React from "react";
import { Link } from "gatsby";
import "../assets/css/style.css";

export default () => {
  return (
    <header>
      <Link class="present" to="/">
        gatsby Link to /
      </Link>
      <br />
      <Link to="/present">gatsby Link to /present</Link>
      <br />

      <a class="present" href="/">
        anchor element to /
      </a>
      <br />
      <a href="/present">anchor element to /present</a>
    </header>
  );
};

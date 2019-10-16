import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="App">
      <h1>Space Home</h1>
      <Link className="Link" to="/space/1">
        Space_Video_1
      </Link>
      <br />
      <Link className="Link" to="/space/2">
        Space_Video_2
      </Link>
      <br />
      <Link className="Link" to="/space/3">
        Space_Video_3
      </Link>
      <br />
    </div>
  );
};

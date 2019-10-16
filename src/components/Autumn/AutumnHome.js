import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="App">
      <h1>Autumn Home</h1>
      <Link className="Link" to="/autumn/1">
        Autumn_Video_1
      </Link>
      <br />
      <Link className="Link" to="/autumn/2">
        Autumn_Video_2
      </Link>
      <br />
      <Link className="Link" to="/autumn/3">
        Autumn_Video_3
      </Link>
      <br />
    </div>
  );
};

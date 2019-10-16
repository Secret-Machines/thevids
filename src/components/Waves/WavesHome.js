import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="App">
      <h1>Waves Home</h1>
      <Link className="Link" to="/waves/1">
        Waves_Video_1
      </Link>
      <br />
      <Link className="Link" to="/waves/2">
        Waves_Video_2
      </Link>
      <br />
      <Link className="Link" to="/waves/3">
        Waves_Video_3
      </Link>
      <br />
    </div>
  );
};

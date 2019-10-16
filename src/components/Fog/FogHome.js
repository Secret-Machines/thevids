import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="App">
      <h1>Fog Home</h1>
      <Link className="Link" to="/fog/1">
        Fog_Video_1
      </Link>
      <br />
      <Link className="Link" to="/fog/2">
        Fog_Video_2
      </Link>
      <br />
      <Link className="Link" to="/fog/3">
        Fog_Video_3
      </Link>
      <br />
    </div>
  );
};

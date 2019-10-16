import React from "react";
import YouTube from "@u-wave/react-youtube";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Link className="Link" to="/waves">
        <li>Waves Menu</li>
      </Link>
      <YouTube
        style={{ height: "400vh" }}
        video="2KEpWWpTImg"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "400vh" }}
        video="jEnd8JIMii4"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "400vh" }}
        video="WwRE6_hghtQ"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "400vh" }}
        video="EDMmI-h3ROU"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "400vh" }}
        video="GaMSYwHrcso"
        width="100%"
        height="100%"
      />
      <br />
    </div>
  );
};

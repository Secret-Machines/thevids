import React from "react";
import YouTube from "@u-wave/react-youtube";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Link className="Link" to="/fog">
        <li>Fog Menu</li>
      </Link>
      <YouTube
        style={{ height: "300vh" }}
        video="iOmJMZo0JYc"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="0Y-9XIp_SmA"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="v8Bo_K5OipI"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="jFnpPMxZZqQ"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="AG86TnBZYAc"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="ZAgii11U9pc"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "300vh" }}
        video="j0tWq-8VqLI"
        width="100%"
        height="100%"
      />
      <br />
    </div>
  );
};

import React from "react";
import YouTube from "@u-wave/react-youtube";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Link className="Link" to="/space">
        <li>Space Menu</li>
      </Link>
      <YouTube
        style={{ height: "400vh" }}
        video="Un5SEJ8MyPc"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "400vh" }}
        video="NM2wtte1JRE"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "400vh" }}
        video="6tmbeLTHC_0"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "400vh" }}
        video="R5bkXdiVDg4"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "400vh" }}
        video="iyDRv1iSjxY"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "400vh" }}
        video="3afEX8a2jPg"
        width="100%"
        height="100%"
      />
      <br />
      <YouTube
        style={{ height: "400vh" }}
        video="YT_0BMBg-js"
        width="100%"
        height="100%"
      />
      <br />
    </div>
  );
};

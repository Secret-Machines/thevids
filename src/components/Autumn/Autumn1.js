import React from "react";
import VideoPlayer from "react-background-video-player";
import Autumn_1 from "./Autumn1.mp4";
import Autumn_2 from "./Autumn2.mp4";
import Autumn_3 from "./Autumn3.mp4";
import Autumn_4 from "./Autumn4.mp4";

import { Link } from "react-router-dom";

const astyle = {
  width: "1900px",
  height: "700px",
  top: "80%",
  border: "1px solid",
  margin: "-300px 0 0 -500px"
};
const astyle2 = {
  width: "1900px",
  height: "700px",
  topPadding: "70%",
  border: "1px solid",
  top: "150%"
};
const astyle3 = {
  width: "1900px",
  height: "700px",
  topPadding: "70%",
  border: "1px solid",
  top: "280%"
};
const astyle4 = {
  width: "1900px",
  height: "700px",
  topPadding: "75%",
  border: "1px solid",
  top: "410%"
};

function Autumn1() {
  return (
    <div className="App">
      <Link className="Link" to="/autumn">
        Autumn Home:
      </Link>
      <p>
        Attribution: Video1-USFWs, Video2-Vivedo, Video3-Khaj1t, and
        Video4-USFWS
      </p>
      <VideoPlayer style={astyle} src={Autumn_1} autoPlay={true} muted={true} />

      <br />
      <hr />
      <VideoPlayer
        style={astyle2}
        src={Autumn_2}
        autoPlay={true}
        muted={true}
      />
      <br />
      <hr />
      <VideoPlayer
        style={astyle3}
        src={Autumn_3}
        autoPlay={true}
        muted={true}
      />
      <br />
      <hr />
      <VideoPlayer
        style={astyle4}
        src={Autumn_4}
        autoPlay={true}
        muted={true}
      />
    </div>
  );
}

export default Autumn1;

import React from "react";
import VideoPlayer from "react-background-video-player";
import Fog_1 from "./Fog1.mp4";
import Fog_2 from "./Fog2.mp4";
import Fog_3 from "./Fog3.mp4";
import Fog_4 from "./Fog4.mp4";
import { Link } from "react-router-dom";

const astyle = {
  width: "1900px",
  height: "700px",
  top: "70%",
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
  topPadding: "70%",
  border: "1px solid",
  top: "410%"
};

function Fog1() {
  return (
    <div className="App">
      <Link className="Link" to="/fog">
        Fog Home
      </Link>
      <VideoPlayer style={astyle} src={Fog_1} autoPlay={true} muted={true} />
      <br />
      <hr />
      <VideoPlayer style={astyle2} src={Fog_2} autoPlay={true} muted={true} />
      <br />
      <hr />
      <VideoPlayer style={astyle3} src={Fog_3} autoPlay={true} muted={true} />
      <br />
      <hr />
      <VideoPlayer style={astyle4} src={Fog_4} autoPlay={true} muted={true} />
    </div>
  );
}

export default Fog1;

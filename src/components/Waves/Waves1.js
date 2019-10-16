import React from "react";
import VideoPlayer from "react-background-video-player";
import Waves_2 from "./Waves2.mp4";
import Waves_3 from "./Waves3.mp4";
import Waves_4 from "./Waves4.mp4";
import Waves_5 from "./Waves5.mp4";
import { Link } from "react-router-dom";

const astyle = {
  width: "1900px",
  height: "650px",
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
  topPadding: "75%",
  border: "1px solid",
  top: "410%"
};

function Waves1() {
  return (
    <div className="App">
      <Link className="Link" to="/waves">
        Waves Home
      </Link>
      <VideoPlayer style={astyle} src={Waves_2} autoPlay={true} muted={true} />
      <br />
      <hr />
      <VideoPlayer style={astyle2} src={Waves_3} autoPlay={true} muted={true} />
      <br />
      <hr />
      <VideoPlayer style={astyle3} src={Waves_4} autoPlay={true} muted={true} />
      <br />
      <hr />
      <VideoPlayer style={astyle4} src={Waves_5} autoPlay={true} muted={true} />
    </div>
  );
}

export default Waves1;

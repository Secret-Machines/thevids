import React from "react";
import VideoPlayer from "react-background-video-player";
import Space_1 from "./Space1.mp4";
import Space_2 from "./Space2.mp4";
import Space_3 from "./Space3.mp4";
import Space_4 from "./Space4.mp4";
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
  topPadding: "70%",
  border: "1px solid",
  top: "410%"
};

function Space1() {
  return (
    <div className="App">
      <Link className="Link" to="/space">
        Space Home
      </Link>
      <VideoPlayer style={astyle} src={Space_1} autoPlay={true} muted={true} />
      <br />
      <hr />
      <VideoPlayer style={astyle2} src={Space_2} autoPlay={true} muted={true} />
      <br />
      <hr />
      <VideoPlayer style={astyle3} src={Space_3} autoPlay={true} muted={true} />
      <br />
      <hr />
      <VideoPlayer style={astyle4} src={Space_4} autoPlay={true} muted={true} />
    </div>
  );
}

export default Space1;

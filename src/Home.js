import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "react-background-video-player";

const mainmenu = {
  width: "2430px",
  height: "790px",
  top: "50%",
  border: "1px solid",
  margin: "-300px 0 0 -500px"
};

export default () => {
  return (
    <div className="App">
      <div className="App">
        <h1 className="mainInput">Welcome to the Home Page</h1>
        <br />
        <Link className="Link" to="/waves">
          List of Wave Videos
        </Link>
        <br />
        <Link className="Link" to="/fog">
          List of Fog Videos
        </Link>
        <br />
        <Link className="Link" to="/autumn">
          List of Autumn Videos
        </Link>
        <br />
        <Link className="Link" to="/space">
          List of Space Videos
        </Link>
        <br />
      </div>
      <hr />
    </div>
  );
};
/*
<VideoPlayer
        style={mainmenu}
        src={
          "https://cdn.videvo.net/videvo_files/converted/2017_09/preview/170804_A_Lombok_021.mp467341.webm"
        }
        autoPlay={true}
        muted={true}
      />
*/

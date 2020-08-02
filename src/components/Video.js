import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div class="container">
      <div className="jumbotron jumbotron-fluid video">
        <ReactPlayer url="https://youtu.be/jdXwzneFBBU" controls />
      </div>
    </div>
  );
};

export default Video;

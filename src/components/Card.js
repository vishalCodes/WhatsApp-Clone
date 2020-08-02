import React from "react";
import Text from "../components/Text";
import Qr from "../components/Qr";
import Video from "../components/Video";

const Card = () => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <div className="row">
          <div className="col-6 text-block">
            <Text />
          </div>
          <div className="col-6 qr-block ">
            <Qr />
          </div>
        </div>
        <div className="video-block">
          <Video />
        </div>
      </div>
    </div>
  );
};

export default Card;

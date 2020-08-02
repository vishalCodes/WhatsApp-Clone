import React from "react";
import qr from "../img/qr.png";

const Qr = () => {
  return (
    <div className="Qr">
      <img src={qr} alt="qr" />
      <div className="check">
        <input type="checkbox" />
        &nbsp; Keep me signed in
      </div>
    </div>
  );
};

export default Qr;

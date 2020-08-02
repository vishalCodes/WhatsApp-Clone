import React from "react";

const Text = () => {
  return (
    <div className="text">
      <h5 className="header">To use WhatsApp on your computer:</h5>
      <p>1. Open WhatsApp on your phone</p>
      <p>
        2.Tap Menu&nbsp;&nbsp; <i class="fas fa-ellipsis-v"></i> &nbsp; or
        Settings <i class="fas fa-cog"></i>&nbsp; and select WhatsApp Web
      </p>
      <p>3.Point your phone to this screen to capture the code</p>
      <div className="bootom-text">
        <a href="/" className=" text-link" style={{ textDecoration: "none" }}>
          need to help get started?
        </a>
      </div>
    </div>
  );
};

export default Text;

import React from "react";

const QRcode = ({ image }) => {
  return (
    <div>
      <img src={image} alt="buy me a coffee!" width={200} />
    </div>
  );
};

export default QRcode;

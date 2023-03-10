import React from "react";

const Footer = () => {
  const style = {
    backgroundColor: "#051E34",
    color: "gray",
    textAlign: "center",
    width: "100%",
    height: "80px",
    marginTop: "6rem",
  };
  return (
    <div
      style={style}
      className="footer-section d-flex align-items-center justify-content-center"
    >
      <p>© Copyright 2023| david_dlm</p>
    </div>
  );
};

export default Footer;

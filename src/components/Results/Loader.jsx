import React, { Component } from "react";
import "../../scss/loader.scss";

const Loader = () => {
  return (
    <div className="book">
      <lottie-player
        src="https://assets3.lottiefiles.com/packages/lf20_ay3tvutd.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Loader;

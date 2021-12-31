import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Title from "./Title";
import "../../scss/banner.scss";
import Emptywarning from "./EmptyWarning";

const handleMouse = (e) => {
  const imgOne = document.querySelector(".one");
  const imgTwo = document.querySelector(".two");
  const imgThree = document.querySelector(".three");
  const imgFour = document.querySelector(".four");
  const imgFive = document.querySelector(".five");
  const imgSix = document.querySelector(".six");

  imgOne.style.marginLeft = -e.clientX / -70 + "px";
  imgOne.style.marginTop = -e.clientY / -70 + "px";

  imgTwo.style.marginLeft = e.clientX / -80 + "px";
  imgTwo.style.marginTop = -e.clientY / 80 + "px";

  imgThree.style.marginLeft = -e.clientX / -75 + "px";
  imgThree.style.marginTop = -e.clientY / 75 + "px";

  imgFour.style.marginRight = -e.clientX / -80 + "px";
  imgFour.style.marginTop = -e.clientY / 80 + "px";

  imgFive.style.marginRight = -e.clientX / -60 + "px";
  imgFive.style.marginBottom = -e.clientY / 60 + "px";

  imgSix.style.marginRight = e.clientX / -70 + "px";
  imgSix.style.marginTop = e.clientY / 70 + "px";
};

const Banner = () => {
  return (
    <header className="banner-container" onMouseMove={handleMouse}>
      <Emptywarning />
      <Title />
      <SearchBar />
    </header>
  );
};

export default Banner;

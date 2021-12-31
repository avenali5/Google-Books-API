import React, { Component } from "react";
import closedBook from "./assets/imgs/closed-book.png";
import openedBook from "./assets/imgs/open-book.png";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Title = () => {
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();

  return (
    <div className="logo-container">
      <img src={closedBook} alt="" className="one" />
      <img src={closedBook} alt="" className="two" />
      <img src={openedBook} alt="" className="three" />
      <img src={closedBook} alt="" className="four" />
      <img src={openedBook} alt="" className="five" />
      <img src={closedBook} alt="" className="six" />
      <h1>
        Find your <span className="coloured">perfect</span> book
      </h1>
      <p>
        Powered by Google Books API, this project lets you search any book by
        author or name.
        {navigator.brave || !browserSupportsSpeechRecognition
          ? ""
          : " You can even use your voice to do it!"}
      </p>
    </div>
  );
};

export default Title;

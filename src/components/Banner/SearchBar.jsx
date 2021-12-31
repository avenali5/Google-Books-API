import React, { Component, useContext, useState, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../Main";
import Microphone from "./Microphone";
import { useSpeechRecognition } from "react-speech-recognition";

const SearchBar = () => {
  const { setResults, setLoader, setWarning, setNoResults } =
    useContext(AppContext);
  const [inputVal, setInputVal] = useState("");
  const [close, setClose] = useState(false);
  const { resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    const searchBar = document.querySelector(".searchInput");
    searchBar.focus();
  }, []);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
    const searchBar = document.querySelector(".searchInput");
    searchBar.value.length > 0 ? setClose(true) : setClose(false);
  };

  const handleSearch = () => {
    let inputValue = document.querySelector(".searchInput").value;
    setInputVal(inputValue);
    if (inputValue == "") {
      setWarning(true);
    } else {
      setLoader(true);
      setWarning(false);
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&startIndex=0&maxResults=40`
        )
        .then((res) => {
          setResults(res.data.items);
          setLoader(false);
          res.data.totalItems === 0 ? setNoResults(true) : setNoResults(false);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleClose = () => {
    setInputVal("");
    document.querySelector(".searchInput").value = "";
    resetTranscript();
  };

  return (
    <div className="searchbar-container">
      <div className="search-bar flex relative">
        <input
          type="search"
          placeholder="Search by author, name..."
          onKeyUp={handleKeyUp}
          className="searchInput"
        />
        <div className="buttons flex">
          <svg
            onClick={handleClose}
            className={`close ${close ? "visibleClose" : ""}`}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.81616 12.1838L12.1837 5.81625"
              stroke="#6065FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.1837 12.1838L5.81616 5.81625"
              stroke="#6065FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {navigator.brave || !browserSupportsSpeechRecognition ? (
            ""
          ) : (
            <Microphone setInputVal={setInputVal} />
          )}
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleSearch}
          >
            <circle cx="23" cy="23" r="23" fill="#6065FF" />
            <path
              d="M22.1667 29.6667C26.3089 29.6667 29.6667 26.3088 29.6667 22.1667C29.6667 18.0245 26.3089 14.6667 22.1667 14.6667C18.0246 14.6667 14.6667 18.0245 14.6667 22.1667C14.6667 26.3088 18.0246 29.6667 22.1667 29.6667Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28.1056 30C28.6634 31.6242 29.9368 31.7867 30.9155 30.3654C31.8101 29.066 31.2207 28.0001 29.6 28.0001C28.4003 27.9899 27.7267 28.8934 28.1056 30Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

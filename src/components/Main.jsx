import React, { useState, createContext, useEffect } from "react";
import Banner from "./Banner/Banner";
import Results from "./Results/Results";

export const AppContext = createContext(null);

const Main = () => {
  const [results, setResults] = useState([]);
  const [loader, setLoader] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [warning, setWarning] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 40 ? setToTop(true) : setToTop(false);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        results,
        setResults,
        loader,
        setLoader,
        favourites,
        setFavourites,
        warning,
        setWarning,
        noResults,
        setNoResults,
      }}
    >
      <Banner />
      <Results />
      <div
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className={`${toTop ? "visible-back-to-top" : ""} back-to-top`}
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5001 32.0834C25.5542 32.0834 32.0834 25.5542 32.0834 17.5C32.0834 9.44587 25.5542 2.91669 17.5001 2.91669C9.44593 2.91669 2.91675 9.44587 2.91675 17.5C2.91675 25.5542 9.44593 32.0834 17.5001 32.0834Z"
            fill="#F3F3F3"
          />
          <path
            d="M17.5 22.6042V13.8542"
            stroke="#6065FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.125 16.7708L17.5 12.3958L21.875 16.7708"
            stroke="#6065FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </AppContext.Provider>
  );
};

export default Main;

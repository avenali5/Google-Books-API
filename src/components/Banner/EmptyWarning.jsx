import React, { Component, useContext, useState } from "react";
import { AppContext } from "../Main";

const Emptywarning = () => {
  const { warning, setWarning } = useContext(AppContext);
  return (
    <article
      className={`warning-box flex absolute ${warning ? "visibleWarning" : ""}`}
    >
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.359 29.3333C23.6923 29.3333 29.6923 23.3333 29.6923 16C29.6923 8.66663 23.6923 2.66663 16.359 2.66663C9.02563 2.66663 3.02563 8.66663 3.02563 16C3.02563 23.3333 9.02563 29.3333 16.359 29.3333Z"
          stroke="#FF5E54"
          stroke-width="1.65679"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.3589 10.6666V17.3333"
          stroke="#FF5E54"
          stroke-width="1.65679"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.3518 21.3333H16.3638"
          stroke="#FF5E54"
          stroke-width="2.20906"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Mm.. Try writing something</span>
      <button
        className="remove absolute"
        onClick={() => {
          setWarning(false);
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2266 19.7734L19.7732 12.2267"
            stroke="#F06363"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.7732 19.7734L12.2266 12.2267"
            stroke="#F06363"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </article>
  );
};

export default Emptywarning;

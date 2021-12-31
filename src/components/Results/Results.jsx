import React, { Component, useContext } from "react";
import Result from "./Result";
import Loader from "./Loader";
import "../../scss/results.scss";
import { AppContext } from "../Main";

const Results = () => {
  const { results, loader, noResults } = useContext(AppContext);
  let data = results;
  return (
    <section className="whole-results-container">
      <div className="results-count">
        {/* <span>{data.length > 1 ? `${data.length} results` : ""} </span> */}
      </div>
      {loader ? <Loader /> : ""}
      <section className="results-container relative max-width">
        {data && data.length > 1 ? (
          data.map((book) => <Result key={book.id} book={book} />)
        ) : (
          <h3 className={`noResults ${noResults ? "noResultsVisible" : ""}`}>
            No results found.. Try something else
          </h3>
        )}
      </section>
    </section>
  );
};

export default Results;

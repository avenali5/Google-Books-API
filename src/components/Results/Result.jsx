import React, { Component, useContext } from "react";

const Result = (props) => {
  let book = props.book;
  let bookVolume = book.volumeInfo;
  let bookCategories = bookVolume.categories;

  // const { favourites, setFavourites } = useContext(AppContext);

  // const addFavourite = (book) => {
  //   // setFavourites(...favourites, book);
  //   setFavourites([...favourites, book]);
  //   console.log(favourites.typeof);
  // };

  return (
    <article className="result">
      <div className="img-container">
        {bookVolume.imageLinks ? (
          <img src={bookVolume.imageLinks.thumbnail} alt="" />
        ) : (
          <img src="assets/imgs/book-img-not-found.png" alt="" />
        )}
      </div>
      <div className="info-container">
        <div className="title-and-link">
          <h2 title={bookVolume.title}>
            {bookVolume.title.length > 34
              ? `${bookVolume.title.substring(0, 34)}...`
              : bookVolume.title}
          </h2>
          {bookVolume.infoLink ? (
            <a target="_blank" noreferrer="true" href={bookVolume.infoLink}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5C13.7348 5 13.4804 4.89464 13.2929 4.70711C13.1054 4.51957 13 4.26522 13 4C13 3.73478 13.1054 3.48043 13.2929 3.29289C13.4804 3.10536 13.7348 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V10C21 10.2652 20.8946 10.5196 20.7071 10.7071C20.5196 10.8946 20.2652 11 20 11C19.7348 11 19.4804 10.8946 19.2929 10.7071C19.1054 10.5196 19 10.2652 19 10V6.414L9.707 15.707C9.5184 15.8892 9.2658 15.99 9.0036 15.9877C8.7414 15.9854 8.49059 15.8802 8.30518 15.6948C8.11977 15.5094 8.0146 15.2586 8.01233 14.9964C8.01005 14.7342 8.11084 14.4816 8.293 14.293L17.586 5H14ZM3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H10C10.2652 5 10.5196 5.10536 10.7071 5.29289C10.8946 5.48043 11 5.73478 11 6C11 6.26522 10.8946 6.51957 10.7071 6.70711C10.5196 6.89464 10.2652 7 10 7H5V19H17V14C17 13.7348 17.1054 13.4804 17.2929 13.2929C17.4804 13.1054 17.7348 13 18 13C18.2652 13 18.5196 13.1054 18.7071 13.2929C18.8946 13.4804 19 13.7348 19 14V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V7Z"
                  fill="#6065ff"
                />
              </svg>
            </a>
          ) : (
            ""
          )}
          <span className="absolute linkHover">See on store</span>
          {/* <span className="fav absolute" onClick={() => addFavourite(book)}> 
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.074 2.633C11.394 1.789 12.605 1.789 12.926 2.633L14.996 8.367C15.141 8.747 15.51 9 15.922 9H21.009C21.949 9 22.359 10.17 21.62 10.743L18 14C17.8379 14.1247 17.7194 14.2975 17.6615 14.4937C17.6037 14.6898 17.6094 14.8993 17.678 15.092L19 20.695C19.322 21.595 18.28 22.368 17.492 21.814L12.575 18.694C12.4066 18.5757 12.2058 18.5122 12 18.5122C11.7942 18.5122 11.5934 18.5757 11.425 18.694L6.50802 21.814C5.72102 22.368 4.67802 21.594 5.00002 20.695L6.32202 15.092C6.39059 14.8993 6.39637 14.6898 6.33852 14.4937C6.28068 14.2975 6.16217 14.1247 6.00002 14L2.38002 10.743C1.64002 10.17 2.05202 9 2.99002 9H8.07702C8.27731 9.00067 8.47308 8.9405 8.63843 8.82747C8.80378 8.71444 8.93092 8.55387 9.00302 8.367L11.073 2.633H11.074Z"
                stroke="#FFC700"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>*/}
          <span className="absolute favHover">Add to favs</span>
        </div>
        <ul>
          <li>
            Author:
            {bookVolume.authors ? (
              <span> {bookVolume.authors[0]}</span>
            ) : (
              <span> Unavailable</span>
            )}
          </li>
          <li>
            Date:
            {bookVolume.publishedDate ? (
              <span> {bookVolume.publishedDate}</span>
            ) : (
              <span> Unavailable</span>
            )}
          </li>
          <li>
            Category:
            {bookCategories ? (
              <span> {bookCategories[0]}</span>
            ) : (
              <span> Unavailable</span>
            )}
          </li>
          <li>
            <a href={bookVolume.infoLink}></a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Result;

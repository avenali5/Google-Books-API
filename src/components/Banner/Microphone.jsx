import React, { useContext } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Microphone = ({ setInputVal }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const listenSpeech = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB",
    });
  };
  const confirmListening = () => {
    SpeechRecognition.stopListening();
    setInputVal(transcript);
    document.querySelector(".searchInput").value = transcript;
    setTimeout(() => {
      resetTranscript();
    }, 1000);
  };

  const abortListening = () => {
    SpeechRecognition.abortListening();
    setInputVal("");
    document.querySelector(".searchInput").value = "";
  };

  return (
    <div className="microphone-container ">
      <div className="mic-icon" onClick={listenSpeech}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9999 18.0833C16.5783 18.0833 18.6666 15.995 18.6666 13.4167V7C18.6666 4.42167 16.5783 2.33333 13.9999 2.33333C11.4216 2.33333 9.33325 4.42167 9.33325 7V13.4167C9.33325 15.995 11.4216 18.0833 13.9999 18.0833Z"
            stroke="#555BFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.07495 11.2583V13.2417C5.07495 18.165 9.07662 22.1667 14 22.1667C18.9233 22.1667 22.9249 18.165 22.9249 13.2417V11.2583"
            stroke="#555BFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.3784 7.50167C13.4284 7.11667 14.5718 7.11667 15.6218 7.50167"
            stroke="#555BFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.0667 9.975C13.685 9.81167 14.3267 9.81167 14.945 9.975"
            stroke="#555BFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 22.1667V25.6667"
            stroke="#555BFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <article
        className={`listening-box absolute flex ${
          listening ? "visibleListening" : ""
        }`}
      >
        I'm listening...
        <div className="buttons flex">
          <button className="confirm relative" onClick={confirmListening}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0001 29.3334C23.3334 29.3334 29.3334 23.3334 29.3334 16C29.3334 8.66669 23.3334 2.66669 16.0001 2.66669C8.66675 2.66669 2.66675 8.66669 2.66675 16C2.66675 23.3334 8.66675 29.3334 16.0001 29.3334Z"
                fill="#D0F3CF"
                stroke="#D0F3CF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.3333 16L14.1066 19.7734L21.6666 12.2267"
                stroke="#14C310"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="absolute">Confirm audio</span>
          </button>

          <button
            className="cancel relative"
            onClick={() => {
              abortListening();
              resetTranscript();
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
                d="M16.0001 29.3334C23.3334 29.3334 29.3334 23.3334 29.3334 16C29.3334 8.66669 23.3334 2.66669 16.0001 2.66669C8.66675 2.66669 2.66675 8.66669 2.66675 16C2.66675 23.3334 8.66675 29.3334 16.0001 29.3334Z"
                fill="#FCE0E0"
                stroke="#FCE0E0"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
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
            <span className="absolute">Cancel audio</span>
          </button>
        </div>
      </article>
    </div>
  );
};

export default Microphone;

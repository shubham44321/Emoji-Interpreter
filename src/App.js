import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
const emojiArray = Object.keys(emojiDictionary);
export default function App() {
  const [message, setMessage] = useState("");
  function decodeEmoji(emoji) {
    var decodedMessage;
    if (emoji !== "") {
      if (emojiDictionary.hasOwnProperty(emoji)) {
        //emoji in emojiDictionary
        decodedMessage = emojiDictionary[emoji];
      } else {
        decodedMessage =
          "Sorry,we dont have the emoji you looking for in our database.";
      }
    } else {
      decodedMessage = "plese select or enter emoji";
    }
    setMessage(decodedMessage);
  }
  return (
    <div className="App">
      <h1>Emoji Decoder</h1>
      <input onChange={(e) => decodeEmoji(e.target.value)} type="text" />
      <h1>{message}</h1>
      <h2>List of emojis we can interpret.</h2>
      {emojiArray.map((emoji, index) => {
        return (
          <span
            key={index}
            onClick={() => decodeEmoji(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

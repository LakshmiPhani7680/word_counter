import React, { useRef, useState } from "react";
export default function Counter() {
  const inputRef = useRef();
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [active, setActive] = useState(false);
  const regex = /\s\S/;
  const handleInput = () => {
    inputRef.current.value.length ? setActive(true) : setActive(false);
    setCharCount(inputRef.current.value.length);
    setWordCount(
      inputRef.current.value === ""
        ? 0
        : inputRef.current.value.split(regex).length
    );
  };
  const handleClear = () => {
    inputRef.current.value = "";
    setActive(false);
    setCharCount(0);
    setWordCount(0);
  };
  return (
    <div className="container">
      <div className="textContainer">
        <textarea
          onChange={handleInput}
          name="textArea"
          rows="15"
          cols="90"
          placeholder="Type or Paste your text"
          id="text-area"
          ref={inputRef}
        />
        <span
          id={active ? "clear-text-active" : "clear-text"}
          onClick={handleClear}
        >
          Clear
        </span>
      </div>
      <div className="counter">
        <span id="character-count">Character: {charCount}</span>
        <span id="word-count">Word: {wordCount}</span>
      </div>
    </div>
  );
}

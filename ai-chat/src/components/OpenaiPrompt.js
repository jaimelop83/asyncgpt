import React, { useState } from "react";
import "./openai-prompt.css";

function OpenaiPrompt() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3001/openai-response?prompt=${inputValue}`
      );
      const data = await response.text(); // get as text and not json
      setOutputValue(data); // set response as text
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleButtonClick();
    }
  };

  return (
    <div className="container">
      <label className="label">
        Enter prompt:
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button className="button" onClick={handleButtonClick}>
        Get OpenAI Response
      </button>
      {isLoading && <p>Loading...</p>}
      {!isLoading && outputValue && (
        <div className="output-container">
          <h2 className="output-header">OpenAI Response:</h2>
          <div className="response-container">
            <p className="output">{outputValue}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenaiPrompt;

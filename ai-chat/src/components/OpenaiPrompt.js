import React, { useState } from 'react';

function OpenaiPrompt() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/openai-response?prompt=${inputValue}`);
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

  return (
    <div>
      <label>
        Enter prompt:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button onClick={handleButtonClick}>Get OpenAI Response</button>
      {isLoading && <p>Loading...</p>}
      {!isLoading && outputValue && (
        <div>
          <h2>OpenAI Response:</h2>
          <p>{outputValue}</p>
        </div>
      )}
    </div>
  );
}

export default OpenaiPrompt;

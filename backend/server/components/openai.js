const axios = require("axios");
require("dotenv").config();
// const OPENAI_API_KEY='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';

console.log(process.env.OPENAI_API_KEY);

const client = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
});

// Function that takes the prompt and model and returns the response from OpenAI
async function getOpenaiResponse(prompt, model) {
  const params = {
    prompt,
    model,
    max_tokens: 100,
    temperature: 0,
  };

  try {
    const response = await client.post(
      "https://api.openai.com/v1/completions",
      params
    );

    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = getOpenaiResponse;

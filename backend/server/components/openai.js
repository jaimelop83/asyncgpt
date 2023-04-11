require('dotenv').config();
console.log(process.env.OPENAI_API_KEY);

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-wS1o0zWBFfKMSTb6D9edubvF",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
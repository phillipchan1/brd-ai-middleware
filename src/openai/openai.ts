import OpenAI from 'openai';
import * as dotenv from 'dotenv';
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
  defaultQuery: { 'api-version': process.env.OPENAI_API_VERSION },
  defaultHeaders: { 'api-key': process.env.OPENAI_API_KEY },
});

export default client;

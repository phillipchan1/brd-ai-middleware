import { client, generateMessage } from '../openai/openai';

interface OpenAIRequest {
  engine: string;
  prompt: string;
  temperature: number;
  max_tokens: number;
}

interface OpenAIResponse {
  choices: { text: string }[];
}

async function sendToChatGPT(prompt: string): Promise<string> {
  try {
    const userMessage = generateMessage(prompt);

    const requestPayload: OpenAIRequest = {
      engine: 'text-davinci-002',
      prompt: userMessage.content,
      temperature: 0.7,
      max_tokens: 100,
    };

    const response = await client.completions.create({
      model: 'text-davinci-002',
      prompt: userMessage.content,
      temperature: 0.7,
      max_tokens: 100,
    });

    const typedResponse = response as OpenAIResponse;

    if (typedResponse && typedResponse.choices && typedResponse.choices.length > 0) {
      return typedResponse.choices[0].text.trim();
    } else {
      throw new Error('Invalid response from ChatGPT');
    }
  } catch (error) {
    console.error('Error communicating with ChatGPT:', error);
    throw new Error('Error communicating with ChatGPT');
  }
}

export { sendToChatGPT };

import client from '../openai/openai';

class BRDGenerator {
  static async generate(data: any) {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion.choices[0].message.content);
    return 'BRD generated';
  }
}

export default BRDGenerator;
import OpenAI from 'openai';

export const dalle = async (prompt, key) => {
  const configuration = new OpenAI.Configuration({
    apiKey: key,
  });

  const openai = new OpenAI.OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: `${prompt}`,
    n: 1,
    size: '512x512',
  });

  return response;
};

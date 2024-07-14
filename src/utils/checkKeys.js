import OpenAI from "openai";

export const checkApiKey = async (keys) => {
  const configuration = new OpenAI.Configuration({
    apiKey: keys,
  });

  const openai = new OpenAI.OpenAIApi(configuration);

  return openai.listModels();
};

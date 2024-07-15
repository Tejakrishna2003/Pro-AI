export const checkApiKey = async (apiKey) => {
  // Function to check the OpenAI API key
  try {
    const response = await fetch('https://api.openai.com/v1/engines', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (response.ok) {
      return true;
    } else {
      throw new Error('Invalid OpenAI API key');
    }
  } catch (error) {
    throw new Error('Invalid OpenAI API key');
  }
};

export const checkGeminiApiKey = async (apiKey) => {
  try {
    const response = await fetch('https://api.gemini.com/v1/pubticker/btcusd', {
      headers: {
        'X-Gemini-APIKey': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error('Invalid Gemini API key');
    }
  } catch (error) {
    console.error('Error verifying API key:', error);
    throw new Error('Invalid Gemini API key');
  }
};

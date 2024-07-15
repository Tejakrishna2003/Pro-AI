import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Calls the Gemini API to generate content based on the provided prompt.
 *
 * @param {string} prompt - The prompt for generating content.
 * @returns {Promise<string>} - A promise that resolves to the generated text.
 */
const gemini = async (prompt) => {
  try {
    // Retrieve the Google Generative AI API key from localStorage
    const genApiKey = window.localStorage.getItem('gemini-api-key');
    if (!genApiKey) {
      throw new Error("Gemini API key is missing");
    }

    // Initialize Google Generative AI with your API key
    const genAI = new GoogleGenerativeAI(genApiKey);

    // Get the generative model (gemini-pro)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate content based on the prompt
    const result = await model.generateContent(prompt);

    // Get the response from the result
    const response = await result.response;

    // Convert the response to text
    const text = await response.text();

    // Return the generated text
    return text;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default gemini;

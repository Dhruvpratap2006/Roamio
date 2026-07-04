const axios = require("axios");

// Ye function review comments ka array leta hai
// aur OpenRouter AI ko bhejta hai sentiment analysis ke liye
module.exports = async function analyzeReviewsAI(reviewComments) {

    // Step 1: Saare comments ko ek text block mein jodna
    const reviewsText = reviewComments
        .map((comment, index) => `Review ${index + 1}: ${comment}`)
        .join("\n");

    // Step 2: Prompt banana - AI ko clearly bata rahe hain kya format chahiye
    const prompt = `
You are analyzing customer reviews for a travel listing.

Here are the reviews:
${reviewsText}

Based on these reviews, respond ONLY with a valid JSON object (no extra text, no markdown, no backticks) in this exact format:

{
  "positive": <number of positive reviews>,
  "neutral": <number of neutral reviews>,
  "negative": <number of negative reviews>,
  "summary": "<a short 2-3 sentence natural language summary of what people are generally saying. Do NOT mention any numbers or counts in this summary. Just describe the overall sentiment and common themes.>"
}
`;

    // Step 3: OpenRouter ko API call
    const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            model: "openrouter/free",
            messages: [
                { role: "user", content: prompt }
            ]
        },
        {
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            }
        }
    );

    // Step 4: Response se raw text nikalna
    let rawText = response.data.choices[0].message.content;

    // Step 5: Kabhi AI JSON ke aage-peeche extra text bhej deta hai
    // isliye sirf { } ke beech ka part nikaal rahe hain
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        throw new Error("Not getting valid response from AI. Please try again later.");
    }

    // Step 6: JSON parse karke return karna
    const result = JSON.parse(jsonMatch[0]);
    return result;
};


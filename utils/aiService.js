// const axios = require("axios");

// async function generateListingDescription({ title, location, category }) {
//   const prompt = `Write an engaging, warm, 3-4 sentence travel listing description for a property called "${title}" located in "${location}", category: "${category}". Make it sound inviting for travelers, no markdown, no headers, just the description text.`;

//   const response = await axios.post(
//     "https://openrouter.ai/api/v1/chat/completions",
//     {
//       model: "anthropic/claude-3.5-haiku",
//       messages: [{ role: "user", content: prompt }],
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   return response.data.choices[0].message.content.trim();
// }

// module.exports = { generateListingDescription };

const axios = require('axios');
// axios – an HTTP client library. 
// It's what lets your Node/Express backend make requests 
// to the OpenRouter API (sending the prompt, getting back the AI-generated description).
// dotenv – loads variables from your .env file 
// (like OPENROUTER_API_KEY) into process.env, 
// so your code can read the API key without hardcoding it.

async function generateListingDescription({ title, location, category}) {
    // in this function we are going to to pass the logic og geneartiung description 
    // and writing an prompt to generate listing description

    const prompt = `Write an engaging, warm, 3-4 sentence travel listing description for a property called "${title}" located in "${location}", category: "${category}". Make it sound inviting for travelers, no markdown, no headers, just the description text.`;

    const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            model: "openrouter/free" ,// our model,
            messages: [{ role: "user", content: prompt }], // basically here we sending message
//  role: "user" — tells the AI "this message is coming from the user side" (as opposed to system or assistant)
// content: prompt — the actual instruction text, which is the string you built earlie
// : "Write an engaging, warm, 3-4 sentence travel listing description for..." 
// and this whole object is wrapped in an array because the API supports multi-turn conversations, 
// but here we only have one message. but this is the format of how the OpenRouter API expects messages to be sent.

        },
        {
            headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            },
        }
    );

    return response.data.choices[0].message.content.trim();
}


module.exports = { generateListingDescription };



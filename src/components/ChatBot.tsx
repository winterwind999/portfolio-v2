// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({});

// const ChatBot = () => {
//   const model = ai.models.generateContent({
//     model: "gemini-2.5-flash-lite",
//     contents: `
//       You are a helpful assistant on [Your Name]'s portfolio website.
//       Use the following data to answer questions:
//       - Education: BS in Computer Science from XYZ University.
//       - Salary Range: $80k - $100k.
//       - Location: Based in New York, USA.
//       - Skills: React, Node.js, and Generative AI.
//       If a user asks something not in this data, reply politely that you don't have that info.
//     `,
//   });

//   const handleChat = async () => {
//     const chat = model.startChat({ history: [] });
//     const result = await chat.sendMessage("Where are you based?");
//     console.log(result.response.text());
//   };

//   return <button onClick={handleChat}>Ask AI</button>;
// };

// export default ChatBot;

const ChatBot = () => {
  return <div>ChatBot</div>;
};

export default ChatBot;

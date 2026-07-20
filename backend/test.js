require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log("Key starts with:", process.env.GEMINI_API_KEY?.substring(0, 6));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function test() {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const result = await model.generateContent("Say Hello");
  console.log(result.response.text());
}

test().catch(console.error);
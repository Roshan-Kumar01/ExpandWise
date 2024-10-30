const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.chatWithGenAI = async (req, res, next) => {
    try {
    const genAI = new GoogleGenerativeAI(process.env.GEN_AI_API_KEY);
    // Initialize model
    const model = genAI.getGenerativeModel({ model:"gemini-1.5-flash" });

    // Generate content based on the user's input
    console.log("meassage:"+req.body.message)
    const result = await model.generateContent(req.body.message);
    res.status(200).json({ response: result.response.text() });
  } catch (error) {
    console.error("Error with GenAI request:", error);
    res.status(500).json({ response: "Failed to generate response from GenAI" });
  }
};

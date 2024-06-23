const axios = require("axios");

const chatController = async (req, res) => {
  try {
    const { sentence } = req.body;
    if (!sentence) {
      return res.status(400).json({ error: "Sentence is required" });
    }

    const apiUrl = "https://api.openai.com/v1/chat/completions";
    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: sentence }],
      temperature: 0.7,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer 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",
    };

    const response = await axios.post(apiUrl, requestData, { headers });
    const generatedText = response.data.choices[0].message.content;
    res.json({ result: generatedText });
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { chatController };

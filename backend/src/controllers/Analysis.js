// const express = require("express");
// const axios = require("axios");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 5000;

// // Middleware
// app.use(bodyParser.json());

// // API endpoint
// app.post("/api/chat", (req, res) => {
//   const { sentence } = req.body;
//   if (!sentence) {
//     return res.status(400).json({ error: "Sentence is required" });
//   }

//   const apiUrl = "https://api.openai.com/v1/chat/completions";
//   const requestData = {
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: sentence }],
//     temperature: 0.7,
//   };
//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: "Bearer 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",
//   };

//   axios
//     .post(apiUrl, requestData, { headers })
//     .then((response) => {
//       const generatedText = response.data.choices[0].message.content;
//       res.json({ result: generatedText });
//     })
//     .catch((error) => {
//       console.error("Error:", error.response ? error.response.data : error.message);
//       res.status(500).json({ error: "An error occurred" });
//     });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

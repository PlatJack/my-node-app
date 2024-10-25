const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to My Node.js App!");
  res.send("Checking auto-execution");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

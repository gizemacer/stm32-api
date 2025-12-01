const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const value = req.query.value;
  if (!value) {
    return res.send("Error: No value received");
  }
  console.log("📊 Received value:", value);
  res.send("OK - Received: " + value);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




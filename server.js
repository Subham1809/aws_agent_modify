const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Node.js App deployed via GitHub Actions to Azure App Service!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

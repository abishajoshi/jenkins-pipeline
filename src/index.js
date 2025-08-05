const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Intermediate Jenkins pipeline running!');
});

module.exports = app;

if (require.main === module) {
  app.listen(8080, () => console.log('Server running on port 8080'));
}
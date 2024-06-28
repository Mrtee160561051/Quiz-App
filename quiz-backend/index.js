const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/submit-quiz', (req, res) => {
  const { name, Class, scoreList, studentScore } = req.body;
  // Here, you can save the results to a database or send an email
  console.log('Quiz results received:', req.body);
  res.status(200).send('Results received');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
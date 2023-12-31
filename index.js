const express = require('express');

const app = express();
const port = 80;

app.get('/test', (req, res) => {
  const end = Date.now() + 1000;
  while (Date.now() < end) {
    const doSomethingHeavyInJavaScript = 1 + 2 + 3;
  }
  res.send(`Gerando carga na CPU! Timestamp: ${new Date().toISOString()}`);
});

app.get('/', (req, res) => {
  
  res.status(200).send('alive');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
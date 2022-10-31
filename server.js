'use strict';

const express = require('express');

// константы
const PORT = 8080;
const HOST = '0.0.0.0';

// приложение
const app = express();
app.get('/', (req, res) => {
  res.send('what a great view! <img src="https://c.files.bbci.co.uk/64FB/production/_127015852_mediaitem127015851.jpg">');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
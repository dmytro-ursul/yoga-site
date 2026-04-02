const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  const livereload = require('livereload');
  const connectLivereload = require('connect-livereload');

  const lrServer = livereload.createServer();
  lrServer.watch(path.join(__dirname, 'public'));

  app.use(connectLivereload());
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

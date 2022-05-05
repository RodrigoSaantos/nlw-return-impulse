import express from 'express';

const app = express();

app.listen(3333, () => {
  console.log('HTTP server listening on port 3333 ✨')
})
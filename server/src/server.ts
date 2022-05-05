import express from 'express';

const app = express();
app.use(express.json())

app.post('/feedbacks', (req, res) => {
  console.log(req.body);
  return res.send('hello world');
})

app.listen(3333, () => {
  console.log('HTTP server listening on port 3333 ✨')
})
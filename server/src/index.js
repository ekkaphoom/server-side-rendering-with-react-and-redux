import express from 'express';
import renderer from './helpers/renderer';

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use('/', (req, res) => {
  const html = renderer();
  res.send(html);
});

app.listen(port, () => {
  console.log(`server is running at localhost:${port}`);
})
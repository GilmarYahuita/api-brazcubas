import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.post('/', (req, res) => {
  res.send("Hello")
});

app.listen(port, () => {
  console.log(`Iniciando o servidor na porta:${port}`);
});
import express from "express";
import { routes } from "./src/routes/routes.js";

const app = express();
const port = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.forEach(({ method, path, handler }) => {
  app[method](path, handler);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

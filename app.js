import express from "express";
import cors from "cors";

import { routes } from "./src/routes/routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);

routes.forEach(({ method, path, handler }) => {
  app[method](path, handler);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

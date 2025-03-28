import express from "express";

const app = express();
const port = 3333;

//root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//listando todos os alunos
app.get("/alunos", (req, res) => {
  res.send("Página de alunos!");
});

//listando um aluno
app.get("/alunos/:id", (req, res) => {
  res.send("Página sobre um aluno");
});

//inserindo um aluno
app.post("/alunos", (req, res) => {
  res.send("Cadastrando um aluno");
});

//atualizando um aluno
app.patch("/alunos/:id", (req, res) => {
  res.send("Atualizando aluno!");
});

//deletando um aluno
app.delete("/alunos/:id", (req, res) => {
  res.send("Excluindo aluno");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

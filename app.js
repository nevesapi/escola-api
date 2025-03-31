import express from "express";
import { readStudents, insertStudent, readOneStudent } from "./src/student.js";

const app = express();
const port = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//root route
app.get("/", (req, res) => {
  res.send("Página inicial da nossa aplicação de NodeJs + Express + Mysql!");
});

//listando todos os alunos
app.get("/alunos", (req, res) => {
  readStudents(res);
});

//listando um aluno
app.get("/alunos/:id", (req, res) => {
  const idStudent = parseInt(req.params.id);

  readOneStudent(idStudent, res);
});

//inserindo um aluno
app.post("/alunos", (req, res) => {
  const newStudent = req.body;

  insertStudent(newStudent, res);
  // res.send("Cadastrando um aluno");
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

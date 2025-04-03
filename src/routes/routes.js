import {
  readStudents,
  insertStudent,
  readOneStudent,
  deleteStudent,
  updateStudent,
} from "../student.js";

export const routes = [
  {
    //root route
    method: "get",
    path: "/",
    handler: (req, res) => {
      res.redirect("https://escola-api-pinto.onrender.com");
    },
  },
  {
    //listando todos os alunos
    method: "get",
    path: "/alunos",
    handler: (req, res) => {
      readStudents(res);
    },
  },
  {
    //listando um aluno
    method: "get",
    path: "/alunos/:id",
    handler: (req, res) => {
      const idStudent = parseInt(req.params.id);

      readOneStudent(idStudent, res);
    },
  },
  {
    //inserindo um aluno
    method: "post",
    path: "/alunos",
    handler: (req, res) => {
      const newStudent = req.body;

      insertStudent(newStudent, res);
    },
  },
  {
    //atualizando um aluno
    method: "patch",
    path: "/alunos/:id",
    handler: (req, res) => {
      const idStudent = parseInt(req.params.id);
      const { nome, primeira, segunda } = req.body;

      updateStudent(idStudent, nome, primeira, segunda, res);
    },
  },
  {
    //deletando um aluno
    method: "delete",
    path: "/alunos/:id",
    handler: (req, res) => {
      const idStudent = parseInt(req.params.id);

      deleteStudent(idStudent, res);
    },
  },
];

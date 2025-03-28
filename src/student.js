import { connectionDb } from "./db.js";

//CRUD
export function readStudents(res) {
  const sql = "SELECT * FROM alunos ORDER BY nome";
  connectionDb.query(sql, (erro, result) => {
    if (result === 0) {
      res.status(204).end();
      return;
    }

    if (erro) {
      res.status(400).json(erro.code);
      console.error(`Erro ao listar alunos ${erro}`);
      return;
    } else {
      res.status(200).json(result);
    }
  });
}

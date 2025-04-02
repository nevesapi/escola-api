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

export function insertStudent(aluno, res) {
  const sql = "INSERT INTO alunos SET ?";
  connectionDb.query(sql, aluno, (erro) => {
    if (erro) {
      res.status(400).json(erro.code);
    } else {
      res.status(201).json({ status: "Aluno inserido" });
    }
  });
}

export function readOneStudent(idAluno, res) {
  const sql = `SELECT * FROM alunos WHERE id = ?`;
  connectionDb.query(sql, idAluno, (erro, result) => {
    if (result === 0) {
      res.send(204).end();
      return;
    }

    if (erro) {
      res.status(400).json(erro.code);
      console.error(`Erro ao listar aluno. Erro: ${erro.message}`);
      return;
    } else {
      res.status(200).json(result[0]);
    }
  });
}

export function deleteStudent(idAluno, res) {
  const sql = "DELETE FROM alunos WHERE id = ?";

  connectionDb.query(sql, idAluno, (erro, result) => {
    if (erro) {
      res.status(400).json(erro.message);
    } else {
      res.status(200).json({ status: "Aluno excluido com sucesso", idAluno });
    }
  });
}

export function updateStudent(idAluno, nome, primeira, segunda, res) {
  const sql =
    "UPDATE alunos SET nome = ?, primeira = ?, segunda = ? WHERE id = ?";

  connectionDb.query(
    sql,
    [nome, primeira, segunda, idAluno],
    (erro, result) => {
      if (erro) {
        console.error("Erro ao atualizar aluno:", erro);
        return res.status(400).json(erro.message);
      } else {
        console.log("Resultado: ", result);

        return res.status(200).json(result);
      }
    }
  );
}

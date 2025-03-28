import mysql from "mysql2";

export const connectionDb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "escola-api",
});

connectionDb.connect((erro) => {
  if (erro) {
    console.error(`Erro ao conectar: ${erro.message}`);
  } else {
  }
  console.log(`DB Conectado com sucesso`);
});

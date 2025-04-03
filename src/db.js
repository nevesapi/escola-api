import mysql from "mysql2";

export const connectionDb = mysql.createConnection({
  host: "db4free.net",
  user: "aidj1123",
  password: "ryQ_QXhb9K5@2M@",
  database: "tec_escola_api",
});

connectionDb.connect((erro) => {
  if (erro) {
    console.error(`Erro ao conectar: ${erro.message}`);
  } else {
    console.log(`DB Conectado em: ${connectionDb.config.host}`);
  }
});

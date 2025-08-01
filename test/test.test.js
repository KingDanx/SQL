import MSSQL from "../models/MSSQL.js";
import PGSQL from "../models/PGSQL.js";

const mssqlCreds = new Map();
const pgsqlCreds = new Map();

mssqlCreds.set("server", "127.0.0.1");
mssqlCreds.set("user", "sa");
mssqlCreds.set("password", "@ssword");
mssqlCreds.set("name", "sql_srv");


const mssql = new MSSQL(mssqlCreds, process.env.DB_DRIVER);
const pgsql = new PGSQL();

console.log(mssql.credentials);
console.log(pgsql.credentials);

/*
await mssql.connect();
await pgsql.connect();

(async () => {
  const { recordset, rows } = await pgsql.query(
    "SELECT * FROM usrdevice WHERE id=$1",
    [1110]
  );
  console.log(recordset);
})();

(async () => {
  const { rows } = await mssql.query(
    "SELECT * FROM usrdevice where id=$1 OR id=$2",
    [2411, 1510]
  );
  console.log(rows);
})();
*/
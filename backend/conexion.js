const mysql = require("promise-mysql");

const config = mysql.createConnection({
    host: "localhost",
    database: "crud-material-design-3",
    user: "root",
    password: "",
});

const conectarse = async () => await config;

module.exports = { conectarse };

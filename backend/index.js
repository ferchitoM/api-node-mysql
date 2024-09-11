const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const database = require("./conexion");

//Configuarción inicial
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Escuchando puerto " + app.get("port"));

//Midlewares
app.use(morgan("dev"));
app.use(cors());

//Rutas
app.get("/usuarios", async (req, res) => {
    const conexion = await database.conectarse();
    const resultado = await conexion.query("SELECT * FROM user");

    //console.log(resultado);
    res.json(resultado);
});

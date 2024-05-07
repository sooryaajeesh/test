const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const router = express.Router();

const app = express();

app.use(bodyParser.json());

//connect mySQL

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql4455",
    database: "mysql",
    waitForConnections: "true",
    connectionLimit: 10,
  });

  const data = {firstName:"soorya",lastName:"ajeesh",place:"kodakara"}

  connection.query






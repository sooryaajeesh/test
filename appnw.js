const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const router = express.Router();

const app = express();

app.use(bodyParser.json());

//mysql connection pooling

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sql4455",
  database: "mysql",
  waitForConnections: "true",
  connectionLimit: 10,
});

//testing the connection

pool.getConnection((err, connection) => {
  if (err) {
    console.error("error connecting to sql", err);
    return;
  }
  console.log("connected to sql");
  connection.release();
});


app.get('/home',(req,res)=>{

    res.send("home page")
      


})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)

});
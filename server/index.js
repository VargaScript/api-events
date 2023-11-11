const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "events",
});

app.get("/events", (req, res) => {
  db.query("SELECT * FROM event", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});

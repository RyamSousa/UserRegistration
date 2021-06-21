import express from "express";

const app = express();

app.get("/test", (req, res) => {
  return res.send("Ryam sousa");
});

app.post("/insert", (req, res) => {
  return res.send("Ryam Sousa insert")
});


app.listen(3000, () => console.log("Server is running"));
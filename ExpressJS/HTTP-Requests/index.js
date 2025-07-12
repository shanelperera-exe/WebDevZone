import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
})

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><br><p>Hey there, I am Shanel Perera</p>");
})

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><br><p>shanelperera@gmail.com<br>+94775643213<br>www.shanelz.com</p>");
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function getToday() {
    const today = new Date();
    const dayIndex = today.getDay();
    if (dayIndex === 6 || dayIndex === 0) {
        return true;
    }
    else {
        return false;
    }
}

app.get("/", (req, res) => {
  if (getToday()) {
    res.render(__dirname + "/views/index.ejs",
    {day: "the weekend", toDo: "have fun"}
    )
  }
  else {
    res.render("index.ejs",
    {day: "a weekday", toDo: "work hard"}
    )
  }
});

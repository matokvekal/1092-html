import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { join } from "path";
import cookieParser from "cookie-parser"; 
import cors from "cors";
let app = express();

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); 
app.use(express.json());

app.post("/", async (req, res) => {
  debugger
  let data = req.body;
  console.log(data);
  if (data && data.name) {
    const username = data.name;
    res.cookie("username", username);
    res.redirect("/welcome");
  } else {
    res.redirect("/");
  }
});

// GET request for the welcome page
app.get("/welcome", (req, res) => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const formPath = join(currentFilePath, "..", "./public/welcome.html");

  const username = req.cookies.username;

  if (username) {
    res.sendFile(formPath);
  } else {
    res.redirect("/");
  }
});

const port=process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

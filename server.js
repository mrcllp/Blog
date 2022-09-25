const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      date: Date.now(),
      description: "Test Description",
    },
    {
      title: "Test Article 2",
      date: Date.now(),
      description: "Test Description 2",
    },
  ];
  res.render("index", { articles: articles });
});

app.listen(5000);

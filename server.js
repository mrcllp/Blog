const express = require("express");
const articleRouter = require("./routes/articles");
const mongoose = require('mongoose')
const Article = require('./models/article')
const app = express();

mongoose.connect('mongodb://localhost/blog', 
{useNewUrlParser: true, useUnifiedTopology: true})

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}))
app.use("/articles", articleRouter);


app.get("/", async (req, res) => {
  const articles = await Article.find()
  res.render("articles/index", { articles: articles });
});

app.listen(5000);


app.use("/articles", articleRouter);
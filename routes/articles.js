// Roures to articles
const Article = require('./../models/article')
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("In articles");
});

router.get('/new', (req, res) => {
  res.render('articles/new',{article: new Article()} )
})

router.get('/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  if (article == null) res.redirect('/')
  res.render('articles/show', {article: article})
})

router.post('/', async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.title,
    markdown: req.body.title
  })

try {
  article = await article.save()
  res.redirect(`/articles/${article.id}`)
} catch (e) {
  res.render('articles/new', {article: article})
}

})

module.exports = router;

// Roures to articles

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("In articles");
});

router.get('/new', (req, res) => {
  res.render('articles/new')
})

router.post('/', (req, res) => {

})

module.exports = router;

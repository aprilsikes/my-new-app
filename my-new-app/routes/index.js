var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/some-page', function (req, res) {
  res.render('say_it', {message: "Hello"})
}):

router.get("/", function (req, res) {
  res.render("say_it", {message: "This is the song that doesn't end", image: "http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg"})
});

router.get("/second-verse", function (req, res) {
  res.render("say_it", {message: "It just goes on and on my friend", image: "http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg"})
});

router.get("/third-verse", function (req, res) {
  res.render("say_it", {message: "Some people started singing it not knowing what it was", image: "http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg"})
});

router.get("/fourth-verse", function (req, res) {
  res.render("say_it", {message: "And they'll continue singing it forever just because...", image: "http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg"})
});

router.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});

module.exports = router;

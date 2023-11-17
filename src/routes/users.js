const express = require('express')

const router = express.Router()


router.get('/users', (req, res) => {
  res.render('users')
})

router.get("/users/:username/photo", (req, res) => {
  console.log(req.params);
  if (req.params.username === "carlos") {
    return res.sendFile("./cat.png", {
      root: __dirname,
    });
  }
  res.send("El usuario no tiene acceso a la imagen");
});

module.exports = router;
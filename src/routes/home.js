const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  let isActive = true
  //datos obtenidos desde la base de datos
  const title = 'Mi pagina creada desde Express'
  const users = [
    {
      id: 1,
      name: "carlos",
      lastname: "quiroz"
    },
    {
      id: 2,
      name: "user2",
      lastname: "lastname2"
    }
  ]
    
  res.render('index', { 
    title: title,
    isActive: isActive,
    users
  
  })
});

router.get('/about', (req, res) => {
  res.render('about')
})

router.get("/dashboard", (req, res) => {
  res.render('dashboard')
})

router.get("/testget", (req, res) => {
  res.render('test')
})
router.get("/search/", (req, res) => {
  if (req.query.q === "carlos") {
    return res.send(`Su busqueda es correcta`);
  } else {
    res.send("No se ha encontrado su usuario");
  }
});

router.get("/static", (req, res) => {
  res.send("Este no es un archivo es un app.get - res.send");
});

module.exports = router
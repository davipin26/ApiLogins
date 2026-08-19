const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const usuarios = [
  {
    "id": 1,
    "usuario": "Esteban.Pinto",
    "password": "123"
  },
  {
    "id": 2,
    "usuario": "Edimer.Velasquez",
    "password": "456"
  },
  {
    "id": 3,
    "usuario": "Yojan.Castañeda",
    "password": "789"
  },
  {
    "id": 4,
    "usuario": "Brandon.Monsalve",
    "password": "978"
  }
];


app.get('/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(usuarios, null, 2));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const usuarios = [
  {
    "id": 1,
    "usuario": "Esteban.Pinto",
    "password": "123",
    "rol": "Administrador"
  },
  {
    "id": 2,
    "usuario": "Edimer.Velasquez",
    "password": "456",
    "rol": "Administrador"
  },
  {
    "id": 3,
    "usuario": "Yojan.Castañeda",
    "password": "789",
    "rol": "Usuario"
  },
  {
    "id": 4,
    "usuario": "Brandon.Monsalve",
    "password": "978",
    "rol": "Usuario"
  }
];


app.get('/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(usuarios, null, 2));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
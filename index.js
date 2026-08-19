const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Aquí defines los datos que quieres que salgan cuando abran el enlace
const usuarios = [
  {
    "id": 1,
    "usuario": "leanne@april.biz",
    "password": "123"
  },
  {
    "id": 2,
    "usuario": "shanna@melissa.tv",
    "password": "456"
  },
  {
    "id": 3,
    "usuario": "nathan@yesenia.net",
    "password": "789"
  }
];

// Esta es la ruta que simula el link exacto (ej. localhost:3000/users)
app.get('/users', (req, res) => {
  res.json(usuarios); // Esto imprime el JSON en el navegador
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
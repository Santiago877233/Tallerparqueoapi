const express = require('express');
const cors = require('cors');
const app = express();
const parqueoRutas = require('./Vista/ParqueoRutas');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/parqueo', parqueoRutas);

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
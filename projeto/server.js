const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const chamadoRoutes = require('./routes/chamadoRoutes');
const db = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());

app.use('/chamados', chamadoRoutes);


db.sync()
  .then(() => console.log('Banco de dados conectado!'))
  .catch(err => console.error('Erro ao conectar ao banco:', err));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

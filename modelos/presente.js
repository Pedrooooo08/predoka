const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Chamado = db.define('Chamado', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  impacto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataOcorrencia: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  atribuido: {
    type: DataTypes.STRING,
  },
});

module.exports = Chamado;

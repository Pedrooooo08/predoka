const Chamado = require('../models/Chamado');

exports.getChamados = async (req, res) => {
  const chamados = await Chamado.findAll();
  res.json(chamados);
};

exports.createChamado = async (req, res) => {
  const chamado = await Chamado.create(req.body);
  res.status(201).json(chamado);
};

exports.updateChamado = async (req, res) => {
  const { id } = req.params;
  await Chamado.update(req.body, { where: { id } });
  res.json({ message: 'Chamado atualizado!' });
};

exports.deleteChamado = async (req, res) => {
  const { id } = req.params;
  await Chamado.destroy({ where: { id } });
  res.json({ message: 'Chamado excluído!' });
};

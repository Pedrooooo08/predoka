const express = require('express');
const { getChamados, createChamado, updateChamado, deleteChamado } = require('../controllers/chamadoController');

const router = express.Router();

router.get('/', getChamados);
router.post('/', createChamado);
router.put('/:id', updateChamado);
router.delete('/:id', deleteChamado);

module.exports = router;

const express = require('express');
const router = express.Router();
const parqueocontrolador = require('../Controlador/ParqueoControlador');

router.get('/', parqueocontrolador.obtenerParqueos);
router.post('/', parqueocontrolador.crearParqueo);
router.put('/:idParqueo', parqueocontrolador.actualizarParqueo);
router.delete('/:idParqueo', parqueocontrolador.eliminarParqueo);

module.exports = router;
const express = require('express');
const router = express.Router();
const ApiController = require ('../controllers/apiController')
const {verificarId} = require ('../middlewares/verificarId')
const checks = require('../middlewares/checks')
const {validarChecks} = require('../middlewares/validarChecks')
const {verificarTalle} = require('../middlewares/verificarTalle')

router.get('/ver', ApiController.verListado)
router.get('/buscarid/:id',verificarId,ApiController.buscarId)
router.get('/buscartalle/:talle',verificarTalle,ApiController.verPorTalle)
router.post('/crear',checks,validarChecks,ApiController.crear)
router.put('/editar/:id',verificarId,checks,validarChecks,ApiController.editar)
router.delete('/borrar/:id',verificarId, ApiController.borrar)

//api externa
router.get('/rickyandmorty',ApiController.rickyAndMorty)

module.exports = router
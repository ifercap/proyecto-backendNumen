const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth')
const checksLogin = require('../middlewares/checksLogin')
const {validarChecks} = require('../middlewares/validarChecks')
const validarToken = require('../middlewares/validarToken')



router.post('/login',checksLogin,validarChecks,userController.login)
router.delete('/logout',userController.logout)
router.get('/sesion',userController.sesion)
router.get('/probarsession',auth,userController.probarSession)
router.get('/cerrar',userController.borrarSesion)

//jwt
router.get('/probartoken',userController.crearToken)
router.get('/testtoken',validarToken,userController.testToken)

module.exports = router
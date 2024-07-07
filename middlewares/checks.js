const {check} = require('express-validator')

const checks = [
    check('marca')
        .notEmpty().withMessage('el campo marca es obligatorio')
        .isString().withMessage('el campo marca debe ser un string'),
    check('nombre')
        .notEmpty().withMessage('el campo nombre es obligatorio')
        .isString().withMessage('el campo nombre debe ser un string'),
    check('color')
        .notEmpty().withMessage('el campo color es obligatorio')
        .isString().withMessage('el campo color debe ser un string'),
    check('talle')
        .notEmpty().withMessage('el campo talle es obligatorio')
        .isNumeric().withMessage('el campo talle debe ser un numero'),
    check('precio')
        .notEmpty().withMessage('el campo precio es obligatorio')
        .isNumeric().withMessage('el campo precio debe ser un numero'),
    check('stock')
        .notEmpty().withMessage('el campo stock es obligatorio')
        .isBoolean().withMessage('el campo stock debe ser un booleano'),
]

module.exports = checks
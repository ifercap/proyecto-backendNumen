const {Botin} = require('../models/Botines')
const verificarTalle = async (req,res,next) =>{
    const botin = await Botin.findOne({talle: req.params.talle})
    if (botin !== null) {
        next()
    } else {
        res.status(500).json({
            msg:"No existe producto talle " + Number(req.params.talle)
        })
    }
}
module.exports = {verificarTalle}
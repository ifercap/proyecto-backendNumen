const {Botin} = require('../models/Botines')
const verificarId = async (req,res,next) =>{
    const busqueda = await Botin.findById(req.params.id)
    if (busqueda !== null) {
        next()
    } else {
        res.status(500).json({
            msg:"el id " + req.params.id + " es invalido"
        })
    }
}
module.exports = {verificarId}
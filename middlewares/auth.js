module.exports = (req,res,next)=>{
    if (!req.session.user){
        res.json({msg: "no hay sesion registrada"})
    } else {
        next()
    }
}
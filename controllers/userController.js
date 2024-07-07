const bcrypt = require('bcryptjs')
const {User} = require('../models/user')
const generadortoken = require('../utils/generador')

class UserController{
    sesion(req,res){
        const user = {
            nombre: "nacho",
            email: "nacho@gmail.com" 
        }
        req.session.user = user
        res.json(req.session)
    }
    probarSession(req,res){
        res.json({session: req.session, cookie: req.cookies.sessionDelUsuario})
    }
    borrarSesion(req,res){
        req.session.destroy()
        res.json({msg: "sesion cerrada"})
    }
    logout(req,res){
        res.clearCookie('sessionDelUsuario')
        req.session.destroy()
        res.json({msg:"sesion cerrada"})
    }
    crearToken(req,res){
        const token = generadortoken(req.body)
        res.json(token)
    }
    testToken(req,res){
        res.json({msg:"paso el token"})
    }
    async login(req,res){
        try {
            const persona = await User.findOne({email: req.body.email})
            if (persona == null){
                res.json({msg:"la contraseña o email es invalido"})
            }
            if (!bcrypt.compareSync(req.body.password,persona.password)){
                res.json({msg:"la contraseña o email es invalido"})
            }
            const token = generadortoken({id:persona._id,email:persona.email})

            res.json({
                msg:"se creo la sesion",
                token
            })

        } catch (error) {
            res.json(error)
        }
    }
}
module.exports = new UserController
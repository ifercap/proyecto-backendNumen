const {Botin} = require('../models/Botines')
const axios = require ("axios")

class ApiController {

    async verListado(req, res){
        const botines = await Botin.find()
        res.status(200).json(botines)
    }
    async verPorTalle(req, res){
        const botin = await Botin.findOne({talle: req.params.talle})
        res.status(200).json({botin})
    }
    async crear (req, res){
        try {
            const botinGuardado = new Botin(req.body)
            await botinGuardado.save()
            res.status(201).json(botinGuardado)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    async editar (req, res){
       try {
            await Botin.findByIdAndUpdate(req.params.id,req.body)
            res.status(201).json({
                msg:"El botin con id " + req.params.id + " se actualizó."
            })
       } catch (error) {
        res.status(400).json(error)
        
       }
    }
    async borrar (req, res){
        await Botin.findByIdAndDelete(req.params.id)
        res.status(201).json({
            msg:"El botin con id " + req.params.id + " se borró."
        })
    }
    async buscarId(req,res){
        const item = await Botin.findById(req.params.id)
        res.status(200).json({item})
    }
    async rickyAndMorty(req,res){
        const data = await axios.get('https://rickandmortyapi.com/api/character')
        res.status(200).json({personajes: data.personajes})
    }
}
module.exports = new ApiController
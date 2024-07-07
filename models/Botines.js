const {Schema, model}=require('mongoose');

const schema = new Schema({
    marca:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    talle:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },

    stock:{
        type: Boolean,
        required: true
    }
})

const Botin = model('Botin', schema);
module.exports = {Botin};
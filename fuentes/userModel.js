const mongoose = require('mongoose');
const Schemma = mongoose.Schema;

const userSchema=new Schemma({
    
    rol:{type: String,required:true},
    nombre:{type: String, required:true},
    carrera:{type:String,required:false},
    celular:{type:Number,required:false},
    fecha_ingreso:{type: Date,required:true}
});

const User=mongoose.model('User',userSchema)
module.exports= User
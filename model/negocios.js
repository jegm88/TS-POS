var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var negocioSchema = new Schema({
  codigo : {type: Number},
  nombre : {type: String },
  descripcion : {type: String },
  mesas : {
     codigo : {type: Number},
     nombre : {type: String },
     descripcion : {type: String },
     estado : {type: Number, enum: [0,1]}, //0 = anulada, 1 = activa
     observaciones  : {type: String }
  },
  estado : {type: Number, enum: [0,1]}, //0 = anulada, 1 = activa
  observaciones	: {type: String }
 });

module.exports = mongoose.model('Negocio', negocioSchema);
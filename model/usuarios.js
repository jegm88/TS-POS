var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var usuarioSchema = new Schema({
  identificacion : {type: String},
  nombres : {type: String },
  nick : {type: String },
  password : {type: String },
  perfil : {type: Number},
  estado : {type: Number, enum: [0,1]}, //0 = anulado, 1 = activo
  observaciones	: {type: String }
 });

module.exports = mongoose.model('Usuario', usuarioSchema);
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var perfilSchema = new Schema({
  codigo : {type: Number},
  nombre : {type: String},
  descripcion : {type: String },
  permisos : {
    codigo : {type: Number}
  },
  estado : {type: Number, enum: [0,1]}, //0 = anulado, 1 = activo
  observaciones	: {type: String }
 });

module.exports = mongoose.model('Perfil', perfilSchema);
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var permisoSchema = new Schema({
  codigo : {type: Number},
  nombre : {type: String },
  descripcion : {type: String },
  estado : {type: Number, enum: [0,1]}, //0 = anulado, 1 = activo
  observaciones : {type: String }
 });

module.exports = mongoose.model('Permiso', permisoSchema);
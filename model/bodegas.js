var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var bodegaSchema = new Schema({
  codigo : {type: Number},
  nombre : {type: String },
  descripcion : {type: String },
  articulos : {
     codigo : {type: Number},
     cantidad : {type: Number},
     stock_min : {type: Number},
     stock_max : {type: Number}
  },
  estado : {type: Number, enum: [0,1]}, //0 = anulada, 1 = activa
  observaciones	: {type: String }
 });

module.exports = mongoose.model('Bodega', bodegaSchema);
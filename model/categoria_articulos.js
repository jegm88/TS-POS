var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var categoria_articuloSchema = new Schema({
  codigo : {type: Number},
  nombre : {type: String },
  descripcion : {type: String },
  articulos : {
    articulos : {type: Number}
  },
  estado : {type: Number, enum: [0,1]}, //0 = anulado, 1 = activo
  observaciones	: {type: String }
 });

module.exports = mongoose.model('Categoria_articulo', categoria_articuloSchema);
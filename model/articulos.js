exports = module.exports = function(app, mongoose) {

  var articuloSchema = new mongoose.Schema({
    codigo : {type: Number},
    nombre : {type: String },
    descripcion : {type: String },
    compuesto : {type: Boolean },
    composicion : {
                    articulo : {type: Number},
                    cantidad : {type: Number},
                    descripcion : {type: String} 
                  },
    proveedores : {
      identificacion : {type: String},
      valor_unit_ultima_compra : {type: Number},
      fecha_ultima_compra : {type: Date}
    },
    valor : {type: Number},
    valor_min : {type: Number},
    valor_max : {type: Number},
    foto : {type: String },
    codigo_barra : {type: String },
    estado : {type: Number, enum: [0,1]}, //0 = anulado, 1 = activo
    observaciones	: {type: String }
   });

  mongoose.model('Articulo', articuloSchema);
};
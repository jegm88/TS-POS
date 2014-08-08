exports = module.exports = function(app, mongoose) {

	var categoria_articuloSchema = new mongoose.Schema({
	  codigo : {type: Number},
	  nombre : {type: String },
	  descripcion : {type: String },
	  articulos : {
	    articulos : {type: Number}
	  },
	  estado : {type: Number, enum: [0,1]}, //0 = anulado, 1 = activo
	  observaciones	: {type: String }
	});

	mongoose.model('Categoria_articulo', categoria_articuloSchema);
};
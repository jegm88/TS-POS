exports = module.exports = function(app, mongoose) {

	var perfilSchema = new mongoose.Schema({
	  codigo : {type: Number},
	  nombre : {type: String},
	  descripcion : {type: String },
	  permisos : {
	    codigo : {type: Number}
	  },
	  estado : {type: Number, enum: [0,1]}, //0 = anulado, 1 = activo
	  observaciones	: {type: String }
	 });

	mongoose.model('Perfil', perfilSchema);
};
exports = module.exports = function(app, mongoose) {

	var permisoSchema = new mongoose.Schema({
	  codigo : {type: Number},
	  nombre : {type: String },
	  descripcion : {type: String },
	  estado : {type: Number, enum: [0,1]}, //0 = anulado, 1 = activo
	  observaciones : {type: String }
	 });

	mongoose.model('Permiso', permisoSchema);
}
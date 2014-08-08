exports = module.exports = function(app, mongoose) {

	var usuarioSchema = new mongoose.Schema({
	  identificacion : {type: String},
	  nombres : {type: String },
	  nick : {type: String },
	  password : {type: String },
	  perfil : {type: Number},
	  estado : {type: Number, enum: [0,1]}, //0 = anulado, 1 = activo
	  observaciones	: {type: String }
	 });

	mongoose.model('Usuario', usuarioSchema);
};
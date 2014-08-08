exports = module.exports = function(app, mongoose) {

var negocioSchema = new mongoose.Schema({
  codigo : {type: Number},
  nombre : {type: String },
  descripcion : {type: String },
  mesas : {
     codigo : {type: Number},
     nombre : {type: String },
     descripcion : {type: String },
     estado : {type: Number, enum: [0,1]}, //0 = anulada, 1 = activa
     observaciones  : {type: String }
  },
  estado : {type: Number, enum: [0,1]}, //0 = anulada, 1 = activa
  observaciones	: {type: String }
 });

mongoose.model('Negocio', negocioSchema);
};
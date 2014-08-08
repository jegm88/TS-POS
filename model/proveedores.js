exports = module.exports = function(app, mongoose) {

  var proveedorSchema = new mongoose.Schema({
    identificacion : {type: Number},
    nombre : {type: String},
    pais : {type: String},
    ciudad : {type: String},
    direccion : {type: String},
    telefonos : {
       telefono : {type: String}
    },
    emails : {
       email : {type: String}
    },
    estado : {type: Number, enum: [0,1]}, //0 = anulada, 1 = activa
    observaciones	: {type: String}
   });

  module.exports = mongoose.model('Proveedor', proveedorSchema);
}
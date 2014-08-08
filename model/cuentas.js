exports = module.exports = function(app, mongoose) {

  var cuentaSchema = new mongoose.Schema({
    codigo : {type: Number},
    fecha : {type: Date },
    vendedor : {type: String },
    seccion : {type: Number },
    mesa : {type: Number },
    cliente : {
                identificacion:{type: String},
                nombre:{type: String},
                telefono:{type: String},
                email:{type: String}
              },
    valor_neto : {type : String},
    descuento : {type : Number},
    recargo : {type : Number},
    valor_total : {type: Number },
    detalles : {
                  articulo : {type : Number},
                  cantidad : {type : Number},
                  descuento : {type : Number},
                  recargo : {type : Number},
                  valor : {type : Number}, 
                  estado : {type: Number, enum: [0,1,2]}, //0 = anulado, 1 = pendiente, 2 = entregado
                  observaciones : {type: String }
              },
    estado : {type: Number, enum: [0,1,2]}, //0 = anulada, 1 = pendiente, 2 = cancelada
    fecha_posible_pago : {type: Date },
    observaciones : {type: String }
   });

  mongoose.model('Cuenta', cuentaSchema);
}
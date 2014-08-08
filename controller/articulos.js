//articulos.js
//TODO: AGREGAR LOS OBJETOS RELACIONADOS AL OBJETO
var mongoose = require('mongoose');
var Articulo = mongoose.model('Articulos');

//GET - Regresa todos los articulos en la BD
exports.listarArticulos = function(req, res) {
	Articulo.find(function(err, articulos) {
 		if(err) return res.send(500, err.message);
		console.log('GET /articulos')
		res.status(200).jsonp(articulos);
	});
};

//GET - Regresa un articulo de la BD (por codigo)
exports.consultarArticulo = function(req, res) {
	Articulo.findById(req.params.codigo, function(err, articulo) {
		 if(err) return res.send(500, err.message);
		console.log('GET /articulo/' + req.params.codigo);
		res.status(200).jsonp(articulo);
	});
};

//POST - Inserta un nuevo articulo en la BD
exports.guardarArticulo = function(req, res) {
	console.log('POST');
	console.log(req.body);
	var articulo = new Articulo({
		codigo : req.body.codigo,
		nombre : req.body.nombre,
		descripcion : req.body.descripcion,
		compuesto : req.body.compuesto,
		valor : req.body.valor,
		valor_min : req.body.valor_min,
		valor_max : req.body.valor_max,
		foto : req.body.foto,
		codigo_barra : req.body.codigo_barra,
		estado : req.body.estado,
		observaciones : req.body.observaciones
	});
	articulo.save(function(err) {
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(articulo);
	});
};

//PUT - Actualiza un articulo previamente guardado en la BD
exports.actualizarArticulo = function(req, res) {
	Articulo.findById(req.params.codigo, function(err, articulo) {
		articulo.codigo = req.body.codigo;
		articulo.nombre = req.body.nombre;
		articulo.descripcion = req.body.descripcion;
		articulo.compuesto = req.body.compuesto;
		articulo.valor = req.body.valor;
		articulo.valor_min = req.body.valor_min;
		articulo.valor_max = req.body.valor_max;
		articulo.foto = req.body.foto;
		articulo.codigo_barra = req.body.codigo_barra;
		articulo.estado = req.body.estado;
		articulo.observaciones = req.body.observaciones;
		articulo.save(function(err) {
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(articulo);
		});
	});
};

//DELETE - Elimina un articulo a partir del codigo
exports.eliminarArticulo = function(req, res) {
	Articulo.findById(req.params.codigo, function(err, articulo) {
		Articulo.remove(function(err) {
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(articulo);
		})
	});
}
//articulos.js
//TODO: AGREGAR LOS OBJETOS RELACIONADOS AL OBJETO

module.exports = function(app) {
var Articulo = require('../models/articulos.js');

//GET - Regresa todos los articulos en la BD
listarArticulos = function(req, res) {
	Articulo.find(function(err, articulos) {
		if(!err) {
			console.log('GET /articulos')
			res.send(articulos);
		} else {
			console.log('ERROR: ' + err);
		}
	});
};

//GET - Regresa un articulo de la BD (por codigo)
consultarArticulo = function(req, res) {
	Articulo.findById(req.params.codigo, function(err, articulo) {
		if(!err) {
			console.log('GET /articulo/' + req.params.codigo);
			res.send(articulo);
		} else {
			console.log('ERROR: ' + err);
		}
	});
};

//POST - Inserta un nuevo Articulo en la BD
guardarArticulo = function(req, res) {
	console.log('POST');
	console.log(req.body);
	var Articulo = new Articulo({
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
	Articulo.save(function(err) {
		if(!err) {
			console.log('Guardado');
		} else {
			console.log('ERROR: ' + err);
		}
	});
	res.send(Articulo);
};

//PUT - Actualiza un articulo previamente guardado en la BD
actualizarArticulo = function(req, res) {
	Articulo.findById(req.params.codigo, function(err, Articulo) {
		Articulo.codigo = req.body.codigo;
		Articulo.nombre = req.body.nombre;
		Articulo.descripcion = req.body.descripcion;
		Articulo.compuesto = req.body.compuesto;
		Articulo.valor = req.body.valor;
		Articulo.valor_min = req.body.valor_min;
		Articulo.valor_max = req.body.valor_max;
		Articulo.foto = req.body.foto;
		Articulo.codigo_barra = req.body.codigo_barra;
		Articulo.estado = req.body.estado;
		Articulo.observaciones = req.body.observaciones;
		Articulo.save(function(err) {
			if(!err) {
				console.log('Actualizado');
			} else {
				console.log('ERROR: ' + err);
			}
			res.send(Articulo);
		});
	});
}

//DELETE - Elimina un articulo a partir del codigo
eliminarArticulo = function(req, res) {
	Articulo.findById(req.params.codigo, function(err, Articulo) {
		Articulo.remove(function(err) {
			if(!err) {
				console.log('Eliminado');
			} else {
				console.log('ERROR: ' + err);
			}
		})
	});
}

//Enlace de rutas y funciones
app.get('/Articulos', listarArticulos);
app.get('/Articulo/:id', consultarArticulo);
app.post('/Articulo', guardarArticulo);
app.put('/Articulo/:id', actualizarArticulo);
app.delete('/Articulo/:id', eliminarArticulo);
}
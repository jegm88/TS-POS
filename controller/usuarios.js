//usuarios.js
var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

//GET - Regresa todos los Usuarios en la BD
exports.listarUsuarios = function(req, res) {
	console.log('GET');
	Usuario.find(function(err, usuarios) {
 		if(err) return res.status(500).send(err.message);
		console.log('GET /Usuarios')
		res.status(200).jsonp(usuarios);
	});
};

//GET - Regresa un usuario de la BD (por identificacion)
exports.consultarUsuario = function(req, res) {
	console.log('GET');
	Usuario.findOne({identificacion : req.params.identificacion}, function(err, usuario) {
		 if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(usuario);
	});
};

//POST - Inserta un nuevo usuario en la BD
exports.guardarUsuario = function(req, res) {
	console.log('POST');
	var usuario = new Usuario({
		identificacion : req.body.identificacion,
		nombres : req.body.nombres,
		nick : req.body.nick,
		password : req.body.password,
		perfil : req.body.perfil,
		estado : req.body.estado,
		observaciones : req.observaciones
	});
	usuario.save(function(err) {
		if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(usuario);
	});
};

//PUT - Actualiza un usuario previamente guardado en la BD
exports.actualizarUsuario = function(req, res) {
	console.log('PUT');
	Usuario.findOne({identificacion : req.params.identificacion}, function(err, usuario) {
		
		usuario.identificacion = req.body.identificacion;
		usuario.nombres = req.body.nombres;
		usuario.nick = req.body.nick;
		usuario.password = req.body.password;
		usuario.perfil = req.body.perfil;
		usuario.estado = req.body.estado;
		usuario.observaciones = req.body.observaciones;

		usuario.save(function(err) {
			if(err) return res.status(500).send(err.message);
			res.status(200).jsonp(usuario);
		});
	});
};

//DELETE - Elimina un usuario a partir del identificacion
exports.eliminarUsuario = function(req, res) {
	console.log('DELETE');
	Usuario.findOne({identificacion : req.params.identificacion}, function(err, usuario) {
		Usuario.remove(function(err) {
		if(err) return res.status(500).send(err.message);
		res.status(200).jsonp(usuario);
		})
	});
}
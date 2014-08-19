var path = require('path');
var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override"),
mongoose = require('mongoose');
// Connection to DB
mongoose.connect('mongodb://localhost/ts-pos', function(err, res) {
if(err) throw err;
console.log('Connected to Database');
});
// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, './view/')));

// Import Models and controllers
var models = require('./model/usuarios')(app, mongoose);
// Example Route
var router = express.Router();
router.get('/', function(req, res) {
	//res.send("Hello world!");
	res.sendFile(path.resolve('view/usuario.html'));	
});
app.use(router);


var UsuarioCtrl = require('./controller/usuarios');

// API routes
var usuarios_route = express.Router();

usuarios_route.route('/usuarios')
  .get(UsuarioCtrl.listarUsuarios)
  .post(UsuarioCtrl.guardarUsuario);

usuarios_route.route('/usuarios/:identificacion')
  .get(UsuarioCtrl.consultarUsuario)
  .put(UsuarioCtrl.actualizarUsuario)
  .delete(UsuarioCtrl.eliminarUsuario);

app.use('/api', usuarios_route);

// Start server
app.listen(3000, function() {
console.log("Node server running on http://localhost:3000");
});
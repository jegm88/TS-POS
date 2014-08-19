function usuario_controller($scope, $http){

    $scope.usuario = new Object();

    $scope.perfiles = [
        {label:'Root', value:0},
        {label:'Administrador', value:1},
        {label:'Usuario', value:2},
        {label:'Invitado', value:3}
    ];

    $scope.estados = [
        {label:'Activo', value:1},
        {label:'Inactivo', value:0}
    ];

    init = new function(){
        $scope.usuario.estado = 0;
    }   


    $scope.saluda = function(){
        alert("Hola mundo!!!");
    }


    $scope.usuarios = new Object();
    $scope.listarUsuarios = function(){
        alert("listarUsuarios");
        $http.get('/api/usuarios').success(function(data) {
                $scope.usuarios = data.body;
                console.log(data.body);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    $scope.consultarUsuario = function(){
        //alert("consultarUsuario"+identificacion);
        $http.get('/api/usuarios/' + $scope.usuario.identificacion).success(function(data) {
                console.log(data);
               //alert(JSON.stringify($scope.usuario));
                $scope.usuario = data;
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    $scope.guardarUsuario = function(){
        alert("guardarUsuario");
        $http.post('/api/usuarios', 
            $scope.usuario).success(function(data) {
                $scope.formData = {};
                $scope.usuario = data.body;
                console.log(data.body);
            }).error(function(data) {
                console.log('Error:' + data);
            });
    };

    $scope.actualizarUsuario = function(){
        alert("actualizarUsuario");
        $http.put('/api/usuarios/' + $scope.usuario.identificacion, 
            $scope.usuario).success(function(data) {
                $scope.formData = {};
                $scope.usuario = data.body;
                console.log(data.body);
            }).error(function(data) {
                console.log('Error:' + data);
            });
    };

    $scope.eliminarUsuario = function(){
        alert("eliminarUsuario");
        $http.delete('/api/usuarios/' + $scope.usuario.identificacion).success(function(data) {
                $scope.formData = {};
                $scope.usuario = new Object();
                console.log(data.body);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

}
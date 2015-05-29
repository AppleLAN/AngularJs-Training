app.controller("view3Controller", ['$scope', function($scope) {
  	{    
		var Persona = {
			nombre:"nombre de empleado",
			apellido:"apellido de empleado"
		};
		
		empleado = Object.create(Persona);
		
		console.log(empleado.nombre); 
		empleado.nombre = "jorge";
		console.log(empleado.nombre);
	}
}]
);

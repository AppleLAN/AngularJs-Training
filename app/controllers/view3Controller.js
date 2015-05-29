app.controller("view3Controller", ['$scope', function($scope) {
  	{    
		var Persona = function(nombre, apellido) {
			var self = this;
			this.nombre = nombre;
			this.apellido = apellido;
		};
		var Dog = function(dogName, pedigree) {
			var self = this;
			this.dogName = dogName;
			this.pedigree = pedigree;
		};
		$scope.messagePersona = "persona";
		$scope.messagePerro = "perro";
		$scope.list = new Array();
		$scope.createPerson = function(){
			var personObject = new Persona($scope.userName,$scope.userLastName);
			$scope.list.push(personObject);
		}
		$scope.createDog = function(dogName,pedigree){
			var dogObject = new Dog(dogName,pedigree);
			$scope.list.push(dogObject);
		}
	}
}]
);

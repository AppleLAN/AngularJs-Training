app.controller("view3Controller", ['$scope', function($scope) {
	
	/*	Initial Variables	*/
	$scope.messagePersona = "persona";
	$scope.messagePerro = "perro";
	
	/*	Create scope objects	*/
	$scope.person = {
		"name": "",
		"lastName": ""
	}
	$scope.animal = {
		"name": "",
		"pedigree": ""
	}
	
	$scope.list = new Array();
	
	/*	Methods declarations	*/
	/*	Create new Person object	*/
	$scope.createPerson = function(){
		var newPerson = new Persona($scope.person.name, $scope.person.lastName);
		$scope.list.push(newPerson);
		$scope.clearForm();
	}
	
	/*	Create new Animal object	*/
	$scope.createDog = function(){
		var newDog = new Dog($scope.animal.name, $scope.animal.pedigree);
		$scope.list.push(newDog);
		$scope.clearForm();
	}
	
	$scope.clearForm = function(){
		$scope.person = {
			"name": "",
			"lastName": ""
		}
		$scope.animal = {
			"name": "",
			"pedigree": ""
		}
		$scope.checked1 = false;
		$scope.checked2 = false;
	}
	
	/*	Classes declarations	*/
	/*	Class Persona	*/
	var Persona = function(nombre, apellido) {
		var self = this;
		this.nombre = nombre;
		this.apellido = apellido;
		
		this.saludar = function(){
			return "Hola, soy "+ self.nombre +" "+ self.apellido +".";
		}
	};
	
	/*	Class Dog	*/
	var Dog = function(nombre, pedigree) {
		var self = this;
		this.nombre = nombre;
		this.pedigree = pedigree;
		
		this.saludar = function(){
			return "Woof, soy "+ self.nombre +", y soy un "+ self.pedigree +", woof.";
		}
	};
}]);

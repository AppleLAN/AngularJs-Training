app.controller("view3Controller", ['$scope', function($scope) {
	
	/*	Initial Variables	*/
	$scope.messagePersona = "Crear persona";
	$scope.messagePerro = "Crear animal";
	
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
	
	$scope.myOrder = "nombre";
	$scope.myReverse = false;
	$scope.customOrder = function(param){
		if(param == $scope.myOrder){
			$scope.myReverse = !$scope.myReverse;
		}
		else{
			$scope.myOrder = param;
			$scope.myReverse = false;
		}
	}
	
	/*	Classes declarations	*/
	/*	Class Persona	*/
	var Persona = function(nombre, apellido) {
		var self = this;
		this.nombre = nombre;
		this.apellido = apellido;
		this.tipo = "persona";
		
		this.saludar = function(){
			return "Hola, soy "+ self.nombre +" "+ self.apellido +".";
		}
	};
	
	/*	Class Dog	*/
	var Dog = function(nombre, pedigree) {
		var self = this;
		this.nombre = nombre;
		this.pedigree = pedigree;
		this.tipo = "animal";
		
		this.saludar = function(){
			return "Woof, soy "+ self.nombre +", y soy un "+ self.pedigree +", woof.";
		}
	};
}]);

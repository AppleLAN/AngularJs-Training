app.controller("view3Controller", ['$scope','gameService','gameFactory', function($scope, gameService, gameFactory) {
	

	/*	Create scope objects	*/
	$scope.game = {
		"name": "",
		"type": "",
	}
	var gameList = gameFactory.getGameList();
	if(typeof gameList != "undefined" && gameList != null && gameList.length > 0){
		$scope.list = gameList;
	}
	else{
		gameService.getGame().success(function(response){
				gameFactory.startList(response);
				$scope.list = gameFactory.getGameList();
		});
	}
	
	/*	Methods declarations	*/
	/*	Create new Person object	*/
	$scope.createGame = function(){
		var newGame = new Game($scope.game.name, $scope.game.type);
		gameFactory.addGameToList(newGame);
		$scope.clearForm();
	}
	
	$scope.clearForm = function(){
		$scope.game = {
			"name": "",
			"type": ""
		}
	}
	
	$scope.myOrder = "name";
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
	var Game = function(name, type) {
		var self = this;
		this.name = name;
		this.type = type;
	};
}]);

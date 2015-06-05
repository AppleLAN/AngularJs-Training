app.controller("view3Controller", ['$scope','gameService','gameFactory', function($scope, gameService, gameFactory) {
	

	$scope.game = {
		"name": "",
		"type": "",
	}
	var gameList = gameFactory.getGameList();
	if(gameFactory.checkList(gameFactory.getGameList())){
		$scope.list = gameList;
	}
	else{
		gameService.getGame().success(function(response){
				gameFactory.startList(response);
				$scope.list = gameFactory.getGameList();
				gameList = $scope.list;
		});
	}
	$scope.createGame = function(){
		var newGame = new Game($scope.game.name, $scope.game.type);
		if(!gameFactory.isGameThere(newGame,gameList))
		{
			gameFactory.addGameToList(newGame);
		}
		else{
			alert("Is in There!!");
		}
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

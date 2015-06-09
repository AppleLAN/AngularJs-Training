app.controller("view3Controller", ['$scope','gameService','gameFactory', function($scope, gameService, gameFactory) {
	$scope.game = {
		"name": "",
		"type": "",
	}
	$scope.rowCollection;
	var gameList = gameFactory.getGameList();
	if(gameFactory.checkList(gameFactory.getGameList())){
		$scope.rowCollection = gameList;
	}
	else{
		gameService.getGame().success(function(response){
				gameFactory.startList(response);
				$scope.rowCollection = gameFactory.getGameList();
				gameList = $scope.rowCollection;
		});
	}
	$scope.displayedCollection = [].concat($scope.rowCollection);
	$scope.createGame = function(){
		var name = $scope.game.name;
		var type = $scope.game.type;
		gameService.getType().success(function(response){
			console.log(response);
			var newGame = new Game(name, gameFactory.getType(type,response));
			if(!gameFactory.isGameThere(newGame,gameList))
			{
				gameFactory.addGameToList(newGame);
			}
			else{
				alert("Is in There!!");
			}
		});
		
		$scope.clearForm();
	}
	
	$scope.clearForm = function(){
		$scope.game = {
			"name": "",
			"type": ""
		}
	}
	//remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
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

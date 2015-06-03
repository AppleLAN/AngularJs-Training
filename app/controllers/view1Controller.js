app.controller("view1Controller", ['$scope','gameService','gameFactory', function($scope, gameService ,gameFactory) {   
  	var gameList = gameFactory.getGameList();
  	if(gameFactory.checkList(gameList)){
		$scope.list = gameFactory.getGameList();
	}
	else{
		gameService.getGame().success(function(response){
				gameFactory.startList(response);
				$scope.list = gameFactory.getGameList();
		});
	}
}]);
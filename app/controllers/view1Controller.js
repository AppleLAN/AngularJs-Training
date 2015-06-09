app.controller("view1Controller", ['$scope','gameService','gameFactory', function($scope, gameService ,gameFactory) {   
  	$scope.rowCollection;
    var allGameList = gameFactory.getGameList();
  	if(gameFactory.checkList(allGameList)){
		$scope.rowCollection = gameFactory.getGameList();
	}
	else
	{
		if(!gameFactory.checkList(allGameList)){
			gameService.getGame().success(function(response){
					gameFactory.startList(response);
					allGameList = gameFactory.getGameList();
					$scope.rowCollection = gameFactory.getGameList();
			});
		}
		else{
			$scope.rowCollection = gameFactory.getGameList();
		}
	}
	//copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
	$scope.displayedCollection = [].concat($scope.rowCollection);
}]);
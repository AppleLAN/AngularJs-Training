app.controller("view2Controller", ['$scope','gameService','gameFactory', function($scope, gameService, gameFactory) {   
    $scope.rowCollection;
    var allGameList = gameFactory.getGameList();
  	var gameList = gameFactory.getUserList();
  	if(gameFactory.checkList(gameList)){
		$scope.rowCollection = gameFactory.getUserList();
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
	$scope.addGame = function(row){
		var userList = gameFactory.getUserList();
		if(!gameFactory.isGameThereUSer(row,userList))
		{
			gameFactory.addUserGameToList(row);
		}
		else{
			alert("Is in There!!");
		}
		$scope.rowCollection = gameFactory.getUserList();
	}
	$scope.getTable = function(){
    	$scope.rowCollection = gameFactory.getGameList();
	};
	$scope.getUserTable = function(){

    	$scope.rowCollection = gameFactory.getUserList();
	};
    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    }
}]);


app.controller("view2Controller", ['$scope','gameService','gameFactory', function($scope, gameService, gameFactory) {   
  	var allGameList = gameFactory.getGameList();
  	var gameList = gameFactory.getUserList();
  	if(gameFactory.checkList(gameList)){
		$scope.list = gameFactory.getUserList();
	}
	else
	{
		if(!gameFactory.checkList(allGameList)){
			gameService.getGame().success(function(response){
					gameFactory.startList(response);
					allGameList = gameFactory.getGameList();
					$scope.list = gameFactory.getGameList();
			});
		}
		else{
			$scope.list = gameFactory.getGameList();
		}
	}
	$scope.createGame = function(){
		var auxList;
		auxList = getGameSelection($scope.game.input,allGameList);
		console.log(auxList);
		for( var x in auxList){
			gameFactory.addUserGameToList(auxList[x]);
		}
		console.log(gameFactory.getUserList());
		$scope.clearForm();
	$scope.list = gameFactory.getUserList();
	}
	$scope.clearForm = function(){
		$scope.game = {
			"name": "",
			"type": ""
		}
	}
	var getGameSelection = function(value,list){
    	var auxList = new Array();
        	for(var i = 0 in list){
            	if(value==list[i].name || value==list[i].type){
              		auxList.push(list[i]);
            	}
         	} 
      return auxList;
		};
	var Game = function(name, type) {
		var self = this;
		this.name = name;
		this.type = type;
	};
}]);
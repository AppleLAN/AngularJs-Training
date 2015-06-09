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
    $scope.selectedRow = null;  // initialize our variable to null
    $scope.setClickedRow = function(index,item){  //function that sets the value of selectedRow to current index
    	$scope.selectedRow = index;
    	if(!gameFactory.isGameThereUSer(item,gameList))
		{
			gameFactory.addUserGameToList(item);
			alert("game saved to list");
		}
		else{
			alert("Is in There!!");
		}
  	}
	$scope.addGame = function(){
		var auxList;
		var isThere;
		var userList = gameFactory.getUserList();
		auxList = getGameSelection($scope.game.input,allGameList);
		console.log(auxList);
		if(gameFactory.checkList(auxList)){
			if(!gameFactory.isGameThereUSer(auxList,userList))
			{
				for( var x in auxList){
					gameFactory.addUserGameToList(auxList[x]);
				}
			}
			else{
				alert("Is in There!!");
			}
		}
		else{
			alert("Game not Found");
		}
		
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
            	if(value.toUpperCase()==list[i].name.toUpperCase() || value==list[i].type.toUpperCase()){
              		auxList.push(list[i]);
            	}
         	} 
      return auxList;
	};
	$scope.getTable = function(){
    	$scope.list = gameFactory.getGameList();
	};
	$scope.getUserTable = function(){

    	$scope.list = gameFactory.getUserList();
    	$scope.list.removeClass('selected');
	};
	var Game = function(name, type) {
		var self = this;
		this.name = name;
		this.type = type;
	};
}]);
app.factory('gameService', function($http) {
   var service = {};
    service.getGame = function(){
   		return $http({
   			method: 'GET',
   			url: 'api/data.json'
         });
   };
   service.getGameNameType = function(){
         return $http({
            method: 'GET',
            url: 'api/nametype.json'
         });
   };
   service.getGameOption = function(option){
         return $http({
            method: 'GET',
            url: 'api/'+ option +'.json'
         });
   };
   service.gamePeople = function(people){
   		return $http({
   			method: 'POST',
   			data: people,
   			url: 'api/data.json'
   		});
   };
   return service;
});
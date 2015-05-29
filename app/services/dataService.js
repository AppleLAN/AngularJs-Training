app.factory('peopleService', function($http) {
   var service = {};
    service.getPeople = function(){
   		return $http({
   			method: 'GET',
   			url: 'api/data.json'
   		});
   };
   service.getPeopleOption = function(option){
   		return $http({
   			method: 'GET',
   			url: 'api/'+ option +'.json'
   		});
   };
   service.postPeople = function(people){
   		return $http({
   			method: 'POST',
   			data: people,
   			url: 'api/data.json'
   		});
   };
   return service;
});
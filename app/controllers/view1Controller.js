app.controller("view1Controller", ['$scope','peopleService', function($scope, peopleService) {
  	{    
		peopleService.getPeople().success(function(response){
			$scope.people = response;
		});
		$scope.message = 'View1';
	}
}]
);

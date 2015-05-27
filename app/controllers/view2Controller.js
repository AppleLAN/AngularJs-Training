app.controller("view2Controller", ['$scope','peopleService', function($scope, peopleService) {
  	{    
		peopleService.getPeople().success(function(response){
			$scope.people = response;
		});
		$scope.message = 'View2';
		$scope.saveText = 'Save';
		$scope.save = function (){
			var data = $scope.people;
			peopleService.postPeople(data).success(function(response){
					$scope.saveText = "All Changes Saved !! ";
			}).error(function(status, data, headers, config){
					$scope.saveText = "Error! ";
			});
		};
		/* setTimeout(function() {
        	$scope.user.name = "Pepe";
        }, 2000)*/
	}
}]
);

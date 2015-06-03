app.controller("dataCtrl", ['$scope','$http', function($scope, $http) {
  	{    
		$http.get('api/data.json').success (function(data){
				$scope.game = data;
		});
 
	}
}]
);

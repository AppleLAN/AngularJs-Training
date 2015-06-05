app.directive('myDirective' ,['gameService','gameFactory', function( gameService,gameFactory)  {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: 
    {
      myDirective: '&',
    },
    link: function (scope, element, attrs, ngModel) {
		var dataJs;
		var option = attrs.myDirective;
		if(gameFactory.checkList(option))
		{
			gameService.getGameOption(option).success(function(response)
			{
				dataJs = response;
			});
		}
		else
		{
			gameService.getGameNameType().success(function(response)
			{
				dataJs = response;
			});
		}
		$(element).on('keyup', function(){
			$(element).autocomplete({
				source:dataJs,
				delay: 1000,
				change: function(event, ui){
					console.log(ui.item);
				},
				select: function( event, ui ) {
	                ngModel.$setViewValue(ui.item.value);
	 			}
			});
		});
  	}
  };
}]);
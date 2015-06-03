app.directive('myDirective' ,['gameService', function( gameService)  {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      myDirective: '&',
    },
    link: function (scope, element, attrs, ngModel) {
		var timing;
		var responseAux;
		$(element).on('keyup', function(){
			clearTimeout(timing);
			timing = setTimeout(function(){
				var dataJs;
				var option = attrs.myDirective;
				if(typeof option != "undefined" && option != null && option.length > 0){
					gameService.getGameOption(option).success(function(response){
						responseAux = response;
					});
				}
				else{
					gameService.getGameNameType().success(function(response){
						responseAux = response;
					});
				}
				dataJsName = responseAux;
				console.log(dataJsName + "aca");
				scope.$parent.directiveValue = $(element).val()
				$(element).autocomplete({
 					'source': dataJsName,
 					select: function( event, ui ) {
                        ngModel.$setViewValue(ui.item.value);
 					}
				})
			}, 500);
		});
    }
  };
}]);
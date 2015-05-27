app.directive('myDirective' ,['peopleService', function( peopleService)  {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      myDirective: '&',
    },
    link: function (scope, element, attrs, ngModel) {
    	console.log("Hola");
		var timing;
		$(element).on('keyup', function(){
			clearTimeout(timing);
			timing = setTimeout(function(){
				var dataJs;
				var option = attrs.myDirective;
				peopleService.getPeopleOption(option).success(function(response){
					dataJsName = response;
					console.log($(element).val())
					scope.$parent.directiveValue = $(element).val()
					$(element).autocomplete({
     					'source': dataJsName,
     					select: function( event, ui ) {
                            ngModel.$setViewValue(ui.item.value);
     					}
    				})

				});
			}, 500);
		});
    }
  };
}]);
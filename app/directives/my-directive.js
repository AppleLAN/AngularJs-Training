app.directive('myDirective' ,['gameService','gameFactory', function( gameService,gameFactory)  {
	return {
		restrict: 'A',
		require: 'ngModel',
		scope: 
		{
		  myDirective: '&',
		},
		link: function (scope, element, attrs, ngModel) {
			var option = attrs.myDirective;
			var urlAux;
			if(gameFactory.checkList(option))
			{
				urlAux = 'api/'+ option +'.json'
			}
			else{
				urlAux ='api/nametype.json'
			}
			$(element).autocomplete({
				source:function(request, response){
					$.ajax({
						url: urlAux,
						dataType: "json",
						data: "searchterm=" + request.term,
						success: function (data) {
							response($.map(data, function (item) {
								return {
									label: item,
									value: item
								};
							}));
						}
					});
				},
				delay: 500,
				change: function(event, ui){
					console.log(ui.item);
				},
				select: function( event, ui ) {
	        	     ngModel.$setViewValue(ui.item.value);
	 			}
			});
		}
	}
}]);
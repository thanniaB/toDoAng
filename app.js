(function(){

	var app = angular.module("todo", []);
	var tasks = [];
	var index, itemsDone = 0, itemsLeft = tasks.length;

	app.controller("TodoController", function ($scope){
			this.tasks = tasks;
			this.items = itemsLeft;

			this.check = function(){
				//function is executed before done status changes, which leads to innacuracies
				itemsLeft = tasks.length;
				tasks.forEach(function(task){
						if(task.done){
							itemsLeft--;
						} 
					}
				);
				//itemsLeft = tasks.length - itemsDone;
				items = itemsLeft;
				console.log(items);
			}	


			this.addTask = function(){
					tasks.push({name: $scope.toDoText, done: false});
			}

			this.deleteBox = function(taskName){
				for(var i=0; i < tasks.length; i++ ){
					if(tasks[i].name === taskName){
						index = i;
					}
				}
				console.log(taskName);
				console.log(index);
				tasks.splice(index, 1);

			};

		}
	);

	//got it from the internet:
	app.directive('ngEnter', function () {
	    return function (scope, element, attrs) {
	        element.bind("keydown keypress", function (event) {
	            if(event.which === 13) {
	                scope.$apply(function (){
	                    scope.$eval(attrs.ngEnter);
	                });
	 
	                event.preventDefault();
	            }
	        });
	    };
	});



}());
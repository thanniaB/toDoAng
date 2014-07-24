(function(){
	var app = angular.module("todo", []);
	var tasks = ["call", "eat", "breathe"];
	app.controller("TodoController", function (){
			this.tasks = tasks;

			this.clickBox = function(){
				alert("funciona");
			};
		}
	);

}());
(function(){

	var app = angular.module("todo", []);
	var tasks = ["test", "eat", "breathe"];

	app.controller("TodoController", function (){

			this.tasks = tasks;

			this.addTask = function(){
					alert("add a task");
			}

			this.clickBox = function(){				
				alert("cross out list name and substract leftover task");
			};

			this.deleteBox = function(){
				alert("delete list item and substract from task list");
			};

			this.editTask = function(){
				alert("edit already added task on double click");
			};

		}
	);

}());
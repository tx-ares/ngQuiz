(function(){

	angular
		.module("pokemonFacts") //This time we will fetch our module "pokemonFacts"
		.controller("listCtrl", ListController); // Then we can CHAIN a function once it's fetched.  We're going to set it to the controller "listCtrl" and pass it a function.

		function ListController(){

		};
})();
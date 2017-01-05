(function(){

	angular
		.module("PokemonFacts") //This time we will fetch our module "pokemonFacts"
		.controller("listCtrl", ListController); // Then we can CHAIN a function once it's fetched.  We're going to set it to the controller "listCtrl" and pass it a function.
		// .controller("listCtrl", ['$injector', ListController]); // Then we can CHAIN a function once it's fetched.  We're going to set it to the controller "listCtrl" and pass it a function.

		// console.log(ListController.$inject = ['10'], "<<< ListController")
		ListController.$inject = ['quizMetrics', 'DataService'];

		function ListController(quizMetrics, DataService){ //$scope is an Angular service.  ( Opting NOT to use $scope in this example. )
			// console.log(quizMetrics, "<< Did we get it? ")

			var vm = this; //view model

			vm.quizMetrics = quizMetrics; // Controllers reference to the quiz data from factory
	        vm.data = DataService.pokeData; // Controller reference to the pokedata created in the factory
	        vm.activePokemon = {}; // will be used in the view to hold the data of currently active pokemon
	        vm.changeActivePokemon = changeActivePokemon; // reference to a named function below
	        vm.activateQuiz = activateQuiz; // reference to named function below
	        vm.search = ""; 

			function changeActivePokemon(index) {
				vm.activePokemon = index;
			}

			function activateQuiz() {
				console.log(quizMetrics.changeState, "<<< quizMetrics")
				console.log("activateQuiz fired!")
				quizMetrics.changeState(true);//Start our ng-hide property as false to keep our main control div visible until conditions are met to hide it.

			}
		};


})();
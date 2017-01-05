(function(){

	angular
		.module("PokemonFacts")
		.controller("quizCtrl", QuizController);
		// .controller("quizCtrl", ['$injector', QuizController]);
		
		QuizController.$inject = ['quizMetrics', 'DataService']; //Injecting the outputted quizMetrics object from the quizMetrics factory.


		function QuizController(quizMetrics, DataService) {
			
			var vm = this;
			console.log("check 1 2 inside QuizController")

			vm.quizMetrics = quizMetrics;
			vm.DataService = DataService;
		}


})();
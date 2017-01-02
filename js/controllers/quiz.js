(function(){

	angular
		.module("PokemonFacts")
		.controller("quizCtrl", QuizController);
		// .controller("quizCtrl", ['$injector', QuizController]);


		QuizController.$inject = ['quizMetrics']; //Injecting the outputted quizMetrics object from the quizMetrics factory.

		function QuizController(quizMetrics) {
			
			var vm = this;
			console.log("check 1 2 inside QuizController")

			vm.quizMetrics = quizMetrics;
		}
})();
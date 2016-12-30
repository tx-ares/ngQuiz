(function(){
	angular
		.module("PokemonFacts")
		.controller("quizCtrl", ['$injector', QuizController]);

		QuizController.$inject = ['quizMetrics']; //Injecting the outputted quizMetrics object from the quizMetrics factory.

		function QuizController(quizMetrics) {
			
			var vm = this;

			vm.quizMetrics = quizMetrics;
		}
})();
(function(){
	angular
		.module("pokemonFacts")
		.controller("quizCtrl", QuizController);

		QuizController.$inject = ['quizMetrics'];

		function QuizController(quizMetrics) {
			
			var vm = this;

			vm.quizMetrics = quizMetrics;
		}
})();
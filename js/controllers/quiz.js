(function(){

	angular
		.module("PokemonFacts")
		.controller("quizCtrl", QuizController);
		// .controller("quizCtrl", ['$injector', QuizController]);

		QuizController.$inject = ['quizMetrics','DataService']; //Injecting the outputted quizMetrics object from the quizMetrics factory.

		function QuizController(quizMetrics, DataService) {
			
			var vm = this;
			console.log("check 1 2 inside QuizController")

			vm.quizMetrics = quizMetrics;
			vm.DataService = dataService;
			vm.questionAnswered = questionAnswered;
			vm.activeQuestion = 0; //By setting this value to 0 we can give the questions a starting place, which will later be able to make the questions clickable and will change current view to selected question.
		
			function questionAnwered(){}
		}


})();
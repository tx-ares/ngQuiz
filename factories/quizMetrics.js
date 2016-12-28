(function() {
	angular
		.module("PokemonFacts")
		.factory("quizMetrics" , QuizMetrics);

		function QuizMetrics(){
			var quizObj = {
				quizActive: false
			};
		};

})
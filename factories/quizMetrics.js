(function() {
	angular
		.module("PokemonFacts")
		.factory("quizMetrics", QuizMetrics);

		function QuizMetrics(){
			var quizObj = {
				quizActive: false,
				changeState: changeState
			};

			console.log(quizObj, "<<< before return")
			return quizObj;

			console.log(quizObj, "<<< quizObj")


			function changeState(state){
				quizObj.quizActive = state;
			}
		};

})
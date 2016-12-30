(function() {
	angular
		.module("PokemonFacts")
		.factory("quizMetrics" , QuizMetrics);

		function QuizMetrics(){
			var quizObj = {
				quizActive: false,
				changeState: changeState
			};

		function changeState(state){
				quizObj.quizActive = state;
			}

			console.log(quizObj, "<<< quizObj")
			return quizObj;

			
		};

})
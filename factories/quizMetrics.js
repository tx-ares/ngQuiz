(function() {
	console.log("HEY!")
	
	angular
		.module("PokemonFacts")
		.factory("quizMetrics", QuizMetrics);

		function QuizMetrics(){
			console.log("QuizMetrics Fired!")
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

		

})();
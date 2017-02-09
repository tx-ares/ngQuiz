(function() {
	// console.log("HEY!")
	
	angular
		.module("PokemonFacts")
		.factory("quizMetrics", QuizMetrics);

		QuizMetrics.$inject = ['DataService'];

		function QuizMetrics(DataService){
			// console.log("QuizMetrics Fired!")
			var quizObj = {
				quizActive: false,
				resultsActive: false,
				changeState: changeState,
				correctAnswers: [],
				markQuiz: markQuiz,
				numCorrect: 0
			};

			// console.log(quizObj, "<<< before return")
			return quizObj;

			function changeState(metric, state){
				// console.log(state, "<< state changed to")
				// console.log("changeState fired!")
				if(metric === 'quiz'){
				quizObj.quizActive = state;
				}else if(metric === 'results'){
					quizObj.resultsActive = state;
				}else{
					return false;
				}
			}

			function markQuiz(){
				quizObj.correctAnswers = DataService.correctAnswers;
				for(var i = 0; i > DataService.quizQuestions.length; i++){
					if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
						DataService.quizQuestions[i].correct = true;
						quizObj.numCorrect++;
					}else{
						DataService.quizQuestions[i].correct = false;
					}
				}
			}
		}

		

})();
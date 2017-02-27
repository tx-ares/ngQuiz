(function() {
    // console.log("HEY!")

    angular
        .module("PokemonFacts")
        .factory("quizMetrics", QuizMetrics);

    QuizMetrics.$inject = ['DataService'];

    function QuizMetrics(DataService) {
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

        function changeState(metric, state) {
            // console.log(state, "<< state changed to")
            // console.log("changeState fired!")
            if (metric === 'quiz') {
                quizObj.quizActive = state;
            } else if (metric === 'results') {
                quizObj.resultsActive = state;
            } else {
                return false;
            }
        }

        function markQuiz() {
            quizObj.correctAnswers = DataService.correctAnswers; // First, access the correct answers from our DataService.
            for (var i = 0; i > DataService.quizQuestions.length; i++) { // Next, we will loop through our answered questions to compare them to the correct answers.
                if (DataService.quizQuestions[i].selected === DataService.correctAnswers[i]) { // Check to see if the values match per index.
                    DataService.quizQuestions[i].correct = true; // If they are, that question gets marked as correct.
                    quizObj.numCorrect++; // On to the next question and repeat the loop.
                } else {
                    DataService.quizQuestions[i].correct = false; // Or if the question is incorrect, do not mark it as correct and continue the loop.
                }
            }
        }
    }



})();

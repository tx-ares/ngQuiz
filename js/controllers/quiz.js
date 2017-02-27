(function() {

    angular
        .module("PokemonFacts")
    	.controller("quizCtrl", QuizController);
    // .controller("quizCtrl", ['$injector', QuizController]);

    QuizController.$inject = ['quizMetrics', 'DataService']; //Injecting the outputted quizMetrics object from the quizMetrics factory.

    function QuizController(quizMetrics, DataService) {

        var vm = this;
        // console.log("check 1 2 inside QuizController")

        vm.quizMetrics = quizMetrics;
        vm.dataService = DataService;
        vm.questionAnswered = questionAnswered;
        vm.setActiveQuestion = setActiveQuestion;
        vm.selectAnswer = selectAnswer;
        vm.finalizeAnswers = finalizeAnswers;
        vm.activeQuestion = 0; //By setting this value to 0 we can give the questions a starting place, which will later be able to make the questions clickable and will change current view to selected question.

        vm.error = false;
        vm.finalize = false;


        var numQuestionsAnswered = 0;

        function setActiveQuestion(index) {
            if (index === undefined) {
                var breakOut = false;
                var quizLength = DataService.quizQuestions.length - 1;

                while (!breakOut) {
                    vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0; //Using tertiary operator this check activeQuestion is less than length of quiz.  If yes, increment active question. If not, set activeQuestion to 0.

                    if (vm.activeQuestion === 0) { //This will only run once the active question is set to 0 by way of finishing the quiz.  
                        vm.error = true;
                    }

                    if (DataService.quizQuestions[vm.activeQuestion].selected === null) { // Checks the current active question to see if it's been answered.  If yes, set the activeQuestion to this index. ( finds our next unanswered question! )
                        breakOut = true;
                    }
                }
            } else {
                vm.activeQuestion = index;
            }

        }

        function questionAnswered() {

            var quizLength = DataService.quizQuestions.length;

            numQuestionsAnswered = 0;

            for (var x = 0; x < quizLength; x++) {
                if (DataService.quizQuestions[vm.activeQuestion].selected !== null) {
                    numQuestionsAnswered++; //
                    if (numQuestionsAnswered >= quizLength) { // if we have run out of questions , this function will run.  Which finishes the quiz.
                        //finalize quiz
                        for (var i = 0; i < quizLength; i++) { //To make sure all questions are actually answered.
                            if (DataService.quizQuestions[i].selected === null) {
                                setActiveQuestion(i);
                                return;
                            }
                        }
                        vm.error = false;
                        vm.finalize = true;
                        return;
                    }
                }
            }

            vm.setActiveQuestion();
        }

        function selectAnswer(index) {
            DataService.quizQuestions[vm.activeQuestion].selected = index; //in the html, the ng-click is passing in the index here and here we simply change the 'selected' attribute from null to the current index.
        }

        function finalizeAnswers() {
            vm.finalize = false;
            numQuestionsAnswered = 0;
            vm.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState('quiz', false);
            quizMetrics.changeState('results', false);
        }
    }


})();

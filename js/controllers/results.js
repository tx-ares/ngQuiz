(function() {

    angular
        .module("PokemonFacts")
        .controller('resultsCtrl', ResultsController);

    ResultsController.$inject = ['quizMetrics', 'DataService'];

    function ResultsController(quizMetrics, DataService) {
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.dataService = DataService;
        vm.getAnswerClass = getAnswerClass;
        vm.setActiveQuestion = setActiveQuestion;
        vm.reset = reset;
        vm.calculatePerc = calculatePerc;
        vm.activeQuestion = 0;

        function calculatePerc() {
            return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
        }

        function setActiveQuestion(index) { //A simple purpose of this function is to set active question to the index during the ng-repeat loop.
            vm.activeQuestion = index;
        }

        function getAnswerClass(index) { //Check the index that is passed through is equal to the correct answer.  Correct answers is stored on quizMetrics service.
            if (index === quizMetrics.correctAnswers[vm.activeQuestion]) {
                return "bg-success";
            } else if (index === DataService.quizQuestions[vm.activeQuestion].selected) {
                return "bg-danger";
            }
        }

        function reset() { //This will reset all flags for each question to their default null values, getting it ready for the next pokemaster!
            quizMetrics.changeState("results", false);
            quizMetrics.numCorrect = 0;

            for (var i = 0; i < DataService.quizQuestions.length; i++) {
                var data = DataService.quizQuestions[i];

                data.selected = null;
                data.correct = null;
            }
        }
    }

})();

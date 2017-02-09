(function(){

	angular
		.module("PokemonFacts")
		.controller('resultsCtrl', ResultsController);

		ResultsController.$inject = ['quizMetrics', 'DataService'];

		function ResultsController(quizMetrics, DataService){
			var vm = this;

			vm.quizMetrics = quizMetrics;
			vm.DataService = DataService;
		}

})();
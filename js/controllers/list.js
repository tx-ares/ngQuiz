(function(){

	angular
		.module("pokemonFacts") //This time we will fetch our module "pokemonFacts"
		.controller("listCtrl", ListController); // Then we can CHAIN a function once it's fetched.  We're going to set it to the controller "listCtrl" and pass it a function.

		function ListController(){ //$scope is an Angular service.  ( Opting NOT to use $scope in this example. )
			var vm = this; //view model

			vm.data = pokeData;
		};

	var pokeData = [
		{
			name: "Squirtle",
			image_url: "https://2.bp.blogspot.com/-atzUuc_vK_Y/VuYP0hNemgI/AAAAAAAAF8s/3G9YSKC439k3x14QbuWOcvXJVEMxaFZbA/s1600/Squirtle.PNG",
			type: "Water"
		},

		{
			name: "Charmander",
			image_url: "http://vignette1.wikia.nocookie.net/stephenking/images/5/56/Charmander.png/revision/latest?cb=20131102233219",
			type: "Fire"
		},

		{
			name: "Bulbasaur",
			image_url: "http://images2.wikia.nocookie.net/__cb20111221113429/bulbasaurfanon/images/4/43/Bulbasaur.png",
			type: "Grass"
		},

		{
			name: "Pikachu",
			image_url: "http://cartoonbros.com/wp-content/uploads/2016/08/pikachu-6.png",
			type: "Lightning"
		},

		{
			name: "Butterfree",
			image_url: "https://2.bp.blogspot.com/-atzUuc_vK_Y/VuYP0hNemgI/AAAAAAAAF8s/3G9YSKC439k3x14QbuWOcvXJVEMxaFZbA/s1600/Squirtle.PNG",
			type: "Bug/Poison",
		},

		{
			name: "Pigeot",
			image_url: "http://vignette1.wikia.nocookie.net/stephenking/images/5/56/Charmander.png/revision/latest?cb=20131102233219",
			type: "Flying",
		},

		{
			name: "Lapras",
			image_url: "http://cartoonbros.com/wp-content/uploads/2016/08/pikachu-6.png",
			type: "Water/Ice",
		},

		{
			name: "Snorlax",
			image_url: "http://vignette1.wikia.nocookie.net/stephenking/images/5/56/Charmander.png/revision/latest?cb=20131102233219",
			type: "Normal",
		}

	]
})();
(function(){

	angular
		.module("pokemonFacts") //This time we will fetch our module "pokemonFacts"
		.controller("listCtrl", ListController); // Then we can CHAIN a function once it's fetched.  We're going to set it to the controller "listCtrl" and pass it a function.

		function ListController(){ //$scope is an Angular service.  ( Opting NOT to use $scope in this example. )
			var vm = this; //view model

			vm.data = pokeData;
			vm.changeActivePokemon = changeActivePokemon; //This takes whatever selected pokemon by the button and "loads" it into the modal.
			vm.search = "";

			function changeActivePokemon(index) {
				vm.activePokemon = index;
			};
		};

	var pokeData = [
		{
			name: "Squirtle",
			image_url: "https://2.bp.blogspot.com/-atzUuc_vK_Y/VuYP0hNemgI/AAAAAAAAF8s/3G9YSKC439k3x14QbuWOcvXJVEMxaFZbA/s1600/Squirtle.PNG",
			type: "Water"
		},

		{
			name: "Charmander",
			image_url: "http://vectorlogo4u.com/wp-content/uploads/2016/08/chramander-vector-high-res.png",
			type: "Fire"
		},

		{
			name: "Bulbasaur",
			image_url: "http://img00.deviantart.net/cfad/i/2011/230/1/a/hi_res_bulbasaur_by_elektro_omega-d4707vf.png",
			type: "Grass"
		},

		{
			name: "Pikachu",
			image_url: "http://cartoonbros.com/wp-content/uploads/2016/08/pikachu-6.png",
			type: "Lightning"
		},

		{
			name: "Butterfree",
			image_url: "https://s-media-cache-ak0.pinimg.com/originals/35/8a/2f/358a2f567b3fef829ea9fa7293fa6ae2.png",
			type: "Bug/Poison",
		},

		{
			name: "Pigeot",
			image_url: "https://s-media-cache-ak0.pinimg.com/originals/ea/84/de/ea84de21a57796f1994218ffc9de3580.png",
			type: "Flying",
		},

		{
			name: "Lapras",
			image_url: "http://i.imgur.com/dIMYtNz.jpg",
			type: "Water/Ice",
		},

		{
			name: "Snorlax",
			image_url: "http://wallpapercave.com/wp/O331x4y.png",
			type: "Normal",
		}

	]
})();
(function(){

	angular
		.module("PokemonFacts")
		.factory("DataService", DataService);

		function DataService() {
			// console.log("DataFactory fired!")
			var dataObj = {
				pokeData: pokeData,
				quizQuestions: quizQuestions,
				correctAnswers: correctAnswers
			};
			// console.log(dataObj, "<<< dataObj!")
			return dataObj;
		}

	var correctAnswers = [1 , 2, 3, 0, 2, 0, 3, 2, 0, 3]; //Demo answers 

	var quizQuestions = [
		{
			type: "text",
			text: "What is the average weight of a Pikachu?",
			possibilities: [
				{
					answer: "30lb"
				},
				{
					answer: "12oz"
				},
				{
					answer: "13.2lb"
				},
				{
					answer: "5lb"
				}
			],
			selected: null,
			correct: null
		},
		{
			type: "image",
			text: "Which pokemon is Lapras?",
			possibilities: [
				{
					answer: "https://2.bp.blogspot.com/-atzUuc_vK_Y/VuYP0hNemgI/AAAAAAAAF8s/3G9YSKC439k3x14QbuWOcvXJVEMxaFZbA/s1600/Squirtle.PNG"
				},
				{
					answer: "http://i.imgur.com/dIMYtNz.jpg"
				},
				{
					answer: "http://img00.deviantart.net/cfad/i/2011/230/1/a/hi_res_bulbasaur_by_elektro_omega-d4707vf.png"
				},
				{
					answer: "http://wallpapercave.com/wp/O331x4y.png"
				}
			],
			selected: null,
			correct: null
		},
		{
			type: "text",
			text: "Where are Charmander commonly found?",
			possibilities: [
				{
					answer: "Seafoam Islands"
				},
				{
					answer: "Cinnabar Island"
				},
				{
					answer: "Power Plants"
				},
				{
					answer: "Mount Moon"
				}
			],
			selected: null,
			correct: null
		},

	]

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
			type: "Grass/Poison"
		},

		{
			name: "Pikachu",
			image_url: "http://cartoonbros.com/wp-content/uploads/2016/08/pikachu-6.png",
			type: "Lightning"
		},

		{
			name: "Butterfree",
			image_url: "https://s-media-cache-ak0.pinimg.com/originals/35/8a/2f/358a2f567b3fef829ea9fa7293fa6ae2.png",
			type: "Bug/Poison/Flying",
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

	];
})();
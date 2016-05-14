import {
	Page, NavController
}
from 'ionic-angular';
@
Page({
	templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
	static get parameters() {
		return [[NavController]];
	}

	constructor(nav) {
		this.nav = nav;
		
		Parse.initialize("TmXH0xxoHsRNoVsaYhVONXGfyffG1LWEXy0EyniB", "uxoTdmPvzx7hzfq2kJ4u1pqNO8mE5AyAQdCIUG6q");
		
		var ScoreObject = Parse.Object.extend("Scores");
		var query = new Parse.Query(ScoreObject);
		query.find({
			success: function (results) {
				var score = results[0].get("score");
				document.getElementById('pointTotal').innerHTML = score;
			},
			error: function (error) {
				console.log("Query Error:" + error.message)
			}
		});
	}

	onPageLoaded() {
		this.items = [
			{
				'name': 'Tarek Moubarak',
				'image': 'images/test.png',
				'points': '200'
			},
			{
				'name': 'Nicolas El Mir',
				'image': 'images/test.png',
				'points': '190'
			},
			{
				'name': 'Farah Assaad',
				'image': 'images/test.png',
				'points': '185'
			},
			{
				'name': 'Nicolas Moubarak',
				'image': 'images/test.png',
				'points': '130'
			},
			{
				'name': 'John Doe',
				'image': 'images/test.png',
				'points': '90'
			}
		];
	}
}
import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the LeaderboardPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/leaderboard/leaderboard.html',
})
export class LeaderboardPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
	
	onPageLoaded(){
		this.items = [
			{'name':'Tarek Moubarak','image':'images/test.png','points':'200'},
			{'name':'Nicolas El Mir','image':'images/test.png','points':'190'},
			{'name':'Farah Assaad','image':'images/test.png','points':'185'},
			{'name':'Nicolas Moubarak','image':'images/test.png','points':'183'},
			{'name':'John Doe','image':'images/test.png','points':'180'},
			{'name':'Tarek Moubarak','image':'images/test.png','points':'178'},
			{'name':'Nicolas El Mir','image':'images/test.png','points':'175'},
			{'name':'Farah Assaad','image':'images/test.png','points':'173'},
			{'name':'Nicolas Moubarak','image':'images/test.png','points':'170'},
			{'name':'John Doe','image':'images/test.png','points':'165'},
			{'name':'Tarek Moubarak','image':'images/test.png','points':'160'},
			{'name':'Nicolas El Mir','image':'images/test.png','points':'155'},
			{'name':'Farah Assaad','image':'images/test.png','points':'150'},
			{'name':'Nicolas Moubarak','image':'images/test.png','points':'130'},
			{'name':'John Doe','image':'images/test.png','points':'115'},
			{'name':'Tarek Moubarak','image':'images/test.png','points':'100'},
			{'name':'Nicolas El Mir','image':'images/test.png','points':'98'},
			{'name':'Farah Assaad','image':'images/test.png','points':'97'},
			{'name':'Nicolas Moubarak','image':'images/test.png','points':'95'},
			{'name':'John Doe','image':'images/test.png','points':'90'}
		];
	}
}

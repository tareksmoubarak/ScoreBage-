import {Page, NavController, Alert, NavParams} from 'ionic-angular';

/*
  Generated class for the SinglePrizePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/single-prize/single-prize.html',
})
export class SinglePrizePage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
		
	 	this.selectedItem = navParams.get('item');
  }
	
	onPageLoaded(){
		this.items = [
			{'name':'Pizza','image':'images/food.jpg','points':'200'},
			{'name':'Burger','image':'images/food.jpg','points':'190'},
			{'name':'Fahita','image':'images/food.jpg','points':'185'},
			{'name':'3G Mbs','image':'images/food.jpg','points':'183'},
			{'name':'Jeans','image':'images/food.jpg','points':'180'},
			{'name':'Shirt','image':'images/food.jpg','points':'178'},
			{'name':'Pizza','image':'images/food.jpg','points':'200'},
			{'name':'Burger','image':'images/food.jpg','points':'190'},
			{'name':'Fahita','image':'images/food.jpg','points':'185'},
			{'name':'3G Mbs','image':'images/food.jpg','points':'183'},
			{'name':'Jeans','image':'images/food.jpg','points':'180'},
			{'name':'Shirt','image':'images/food.jpg','points':'178'}
		];
	}
	
	showAlert(points,name){
		let confirm = Alert.create({
      title: 'Get This Item?',
      message: 'Do you agree to spend '+points+' points to get '+name+'?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
		
		this.nav.present(confirm);
	}
}

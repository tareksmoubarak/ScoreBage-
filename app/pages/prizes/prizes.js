import {Page, NavController} from 'ionic-angular';
import {SinglePrizePage} from '../single-prize/single-prize';

/*
  Generated class for the PrizesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/prizes/prizes.html',
})
export class PrizesPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
		
		this.items = [
            { 'title': 'McDonalds', 'bg': 'images/food.jpg' },
            { 'title': 'Starbucks', 'bg': 'images/food.jpg' },
            { 'title': 'Dominos Pizza', 'bg': 'images/food.jpg' },
            { 'title': 'Fertile', 'bg': 'images/food.jpg' },
            { 'title': 'Touch', 'bg': 'images/food.jpg' },
            { 'title': 'iStyle', 'bg': 'images/food.jpg' },
            { 'title': 'Zara', 'bg': 'images/food.jpg' },
            { 'title': 'Bershka', 'bg': 'images/food.jpg' }
        ];

		this.rows = Array.from(Array(Math.ceil(this.items.length / 2)).keys());
  }
	
	itemTapped(item) {
		 this.nav.push(SinglePrizePage, {
       item: item
     });
  }
}

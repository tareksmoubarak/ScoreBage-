import {Page} from 'ionic-angular';
import {HomePage} from '../home/home';
import {LeaderboardPage} from '../leaderboard/leaderboard';
import {PrizesPage} from '../prizes/prizes';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.home = HomePage;
    this.leaderboard = LeaderboardPage;
    this.prizes = PrizesPage;
  }
}

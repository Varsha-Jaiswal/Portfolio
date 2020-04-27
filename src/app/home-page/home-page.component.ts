import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selectedTab = 'home';
  tabData = [];
  imageUrl = '../../assets/home-page-profile/varsha.jpg';

  constructor() { }

  ngOnInit() {
    this.getTabData();
  }

  getTabData() {
    this.tabData = [
      'HOME', 'BIO', 'WORK', 'PROJECTS', 'TALKS', 'CONTACT'
    ];
  }

  changeTabSelected(tab) {
    this.selectedTab = tab.toLowerCase();
    switch (this.selectedTab) {
      case 'bio':
        this.imageUrl = '../../assets/home-page-profile/bio-page.jpg';
        break;
      case 'work':
        this.imageUrl = '../../assets/home-page-profile/work.jpg';
        break;
      case 'projects':
        this.imageUrl = '../../assets/home-page-profile/projects.jpg';
        break;
      case 'talks':
        this.imageUrl = '../../assets/home-page-profile/talk.jpg';
        break;
      case 'contact':
        this.imageUrl = '../../assets/home-page-profile/contact.jpg';
        break;
      default:
        this.imageUrl = '../../assets/home-page-profile/varsha.jpg';
        break;
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selectedTab = 'home';
  tabData = [];
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
  }
}

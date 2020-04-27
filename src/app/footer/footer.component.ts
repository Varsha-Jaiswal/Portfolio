import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  imagesData = [];
  constructor() { }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.imagesData = [
      {
        url: '../../assets/home-page/devfest-jalandhar-2015.jpg',
        name: 'DevFest Jalandhar 2015'
      },
      {
        url: '../../assets/home-page/appification-2016.jpg',
        name: 'Appification 2016'
      },
      {
        url: '../../assets/home-page/sap-hackathon-2017.jpg',
        name: 'SAP Hackathon 2019'
      },
      {
        url: '../../assets/home-page/iwd-bangalore-2019.jpg',
        name: 'IWD Bangalore 2019'
      },
      {
        url: '../../assets/home-page/devfest-punjab-2019.jpeg',
        name: 'DevFest Punjab 2019'
      },
      {
        url: '../../assets/home-page/devfest-nagpur-2019.jpg',
        name: 'DevFest Nagpur 2019'
      }
    ];
  }

}

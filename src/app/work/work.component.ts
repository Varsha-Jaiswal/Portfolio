import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  workData = [];
  communityData = [];

  constructor() { }

  ngOnInit() {
    this.getWorkData();
    this.getCommunityData();
  }

  getWorkData() {
    this.workData = [
      {
        position: 'Software Development Engineer',
        organization: 'Edfora Infotech Pvt. Ltd. (myPAT)',
        organizationUrl: 'https://mypat.in/',
        duration: 'Jul 2019 - Present',
        description: 'Working as a Frontend developer on the product of the company, i.e. myPAT having technology stack based on Angular.',
        projects: ['myPAT', 'Watson'],
        technicalStack: 'Angular'
      },
      {
        position: 'Software Developer Intern',
        organization: 'iBHubs',
        organizationUrl: 'https://ibhubs.co/',
        duration: 'Sep 2018 - May 2019',
        description: 'Worked as a Frontend developer on ReactJS. Initially, joined as a Backend developer and worked on Django.',
        projects: ['iBCricket'],
        technicalStack: 'Django, ReactJS'
      },
      {
        position: 'Software Developer Intern',
        organization: 'OpenSense Labs',
        organizationUrl: 'https://opensenselabs.com/',
        duration: 'May 2017 – Aug 2017',
        description: 'Worked as a Module Developer for the open-source organization and developed few modules using Drupal8.',
        projects: ['CleanTaxonomy Module', 'Attendance Module'],
        technicalStack: 'Drupal8'
      }
    ];
  }

  getCommunityData() {
    this.communityData = [
      {
        organization: 'GDG Jalandhar',
        organizationUrl: 'https://gdgjalandhar.com/',
        position1: 'Co-Organizer',
        duration1: 'Feb 2018 – Present',
        description1: `Organized various events all over Punjab on behalf of GDG Jalandhar and delivered technical sessions on 
        Actions on Google, Dialogflow, Firebase, PWA and Web Fundamentals.
        Also, contributed in projects/web apps of GDG Jalandhar for the upcoming events.`,
        position2: 'Event Organizer',
        duration2: 'Oct 2016 – Present',
        description2: 'Volunteered in multiple events and planned the meetups of behalf of GDG Jalandhar.'
      },
      {
        organization: 'Women Techmakers',
        organizationUrl: 'https://www.womentechmakers.com/',
        position1: 'WTM Ambassador',
        duration1: 'Sep 2018 - May 2019',
        description1: `Planned and organized events for female developers and providing a platform to 
        uplift them in the technical world, on behalf of WTM Jalandhar.`,
        position2: 'Team Member',
        duration2: 'Nov 2016 – Present',
        description2: `Organized and volunteered the events, specially for female developers and
         promoted diversity in the community and technical field.`
      },
      {
        organization: '#IamRemarkable',
        organizationUrl: 'https://iamremarkable.withgoogle.com/',
        position1: '#IamRemarkable Facilitator',
        duration1: 'May 2019 – Present',
        description1: 'Worked as a Module Developer for the open-source organization and developed few modules using Drupal8.'
      }
    ];
  }
}

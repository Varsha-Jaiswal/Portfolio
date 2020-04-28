import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectsData = [];
  constructor() { }

  ngOnInit() {
    this.getProjectsData();
  }

  getProjectsData() {
    this.projectsData = [
      {
        name: 'IWD Jalandhar App',
        year: '2020',
        description: `A web application for IWD Jalandhar on behalf of GDG WTM Jalandhar.
           It is dynamic web application and PWA created in Vue.js and also using HTML, CSS, JavaScript, etc.`,
        projectUrl: 'https://iwd-jalandhar.web.app/'
      },
      {
        name: 'DevFest Punjab Actions',
        year: '2019',
        description: `Designed the actions for DevFest Punjab using Google Assistant with Dialogflow.
           The aim of this application is to make the participants aware about the agenda, speakers, sessions,
            sponsors and many more details about the event through Google Assistant.`,
        projectUrl: 'https://assistant.google.com/services/a/uid/000000a6f27a8909'
      },
      {
        name: 'DevFest Punjab App',
        year: '2019',
        description: `A web application for DevFest Punjab on behalf of GDG Jalandhar.
           It is dynamic web application and PWA created in Vue.js and also using HTML, CSS, JavaScript, etc.`,
        projectUrl: 'https://devfest-punjab.web.app'
      },
      {
        name: 'NewsAir App',
        year: '2019',
        description: `A web application to get the news headlines from the news api.
           We can filter the news based on country and category. Also, the user can read the articles of his/her interest.
            The project is designed using Vue.js, Bootstrap and Firebase.`,
        projectUrl: 'https://news-air.firebaseapp.com'
      },
      {
        name: 'LineUp App',
        year: '2019',
        description: `Designed a web application where user can list down the To-do items and can perform
           various filters and operations on the listed to-dos. This project is designed using ReactJS,
            Bootstrap and deployed on Firebase.`,
        projectUrl: 'https://my-lineups.firebaseapp.com'
      },
      {
        name: 'Load Meetup Events',
        year: '2019',
        description: `Designed a web application using basics of Vue.js and Bootstrap to load past
           events/meetups hosted by GDG Jalandhar by fetching data from Meetup API and showcase it to the user.`,
        projectUrl: 'https://meetup-events-data.firebaseapp.com'
      },
      {
        name: 'Fetch GitHub Users',
        year: '2019',
        description: `Created a portal to fetch GitHub users from GitHub API and show the results according to user’s choice.
           It is a web application using Bootstrap, JavaScript and deployed on Firebase.`,
        projectUrl: 'https://github-users-project.firebaseapp.com'
      },
      {
        name: 'Stockpile Record',
        year: '2019',
        description: `Created a web app to list down the notes or comments of a user and show that whenever the user needs it.
           It also allows the user to delete the notes. This project is designed using ReactJS, Bootstrap and deployed on Firebase.`,
        projectUrl: 'https://stockpile-record.firebaseapp.com'
      },
      {
        name: 'Slot-Booking Application',
        year: '2018',
        description: `Developed the backend in Django for booking the slot of iB-Cricket application depending on
           the available slots in arcades. User can easily find the nearest arcades based on the current location using Google Maps API.`,
        projectUrl: 'NA'
      },
      {
        name: 'Google Cloud Next 2018',
        year: '2018',
        description: `Designed and developed a web application for Cloud Next’18 event on behalf of GDG Jalandhar.
           It is a dynamic application using Firebase Auth and Firebase Real-time database for participant’s registration.
            It is a PWA made using HTML5, CSS, JavaScript, Bootstrap, AngularJS and MDG 2.0.`,
        projectUrl: 'https://gdgjalandhar.com/e/next18'
      },
      {
        name: 'Varsha’s Resume Actions',
        year: '2018',
        description: `Designed the actions for My Digital Resume using Google Assistant with Dialogflow.
           The aim of this application is to make the user aware about the skills, projects, achievements
            and many more by establishing a direct communication through Google Assistant.`,
        projectUrl: 'https://assistant.google.com/services/a/uid/000000b14600931a'
      },
      {
        name: 'Web Profile - GDG Jalandhar',
        year: '2018',
        description: `Created a Mobo responsive standardized web page for the core team members of
           GDG Jalandhar using HTML5, CSS, JavaScript and Material Design Bootstrap.`,
        projectUrl: 'https://github.com/Varsha-Jaiswal/varsha-jaiswal.github.io'
      },
      {
        name: 'WTM Jalandhar Actions',
        year: '2018',
        description: `Developed actions for WTM Jalandhar using Actions on Google with Dialogflow.
           It provides the details about Women Techmakers and various programs offered by them for women all
            around the globe. Technological stacks are: Webhooks, NodeJS, Firebase Cloud Functions and
             Firebase Real-time database for dynamic responses.`,
        projectUrl: 'https://assistant.google.com/services/a/uid/000000e0d86d368b'
      },
      {
        name: 'Photo Stitching Application',
        year: '2017',
        description: `Using OpenCV and C++, developed an application to stitch the available pictures by
           matching the pixels producing a 360-panorama view as the output.`,
        projectUrl: 'https://github.com/varsha-jaiswal/Panorama-Generator'
      },
      {
        name: 'CleanTaxonomy Module',
        year: '2017',
        description: `Designed a module using Drupal8 which can manage all the taxonomy terms in a
           website by providing services like edit, delete, rename and replace of the taxonomy terms to the administrator.`,
        projectUrl: 'https://github.com/varsha-jaiswal/CleanTaxonomy'
      },
      {
        name: 'Attendance Module',
        year: '2017',
        description: `Designed a module using Drupal8 which is used to mark the attendance of the employee and show the weekly
         attendance and send the updates to the administrator.`,
        projectUrl: 'https://github.com/varsha-jaiswal/Attendance'
      }
    ]
  }
}

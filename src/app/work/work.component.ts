import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
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
        position: 'Engineering Manager',
        organization: 'Aeria X (formerly UBZ)',
        organizationUrl: 'https://www.aeria.world/',
        duration: 'Apr 2023 - Jan 2025',
        description: [
          'Spearheaded the end-to-end development of a SaaS MVP using NestJS, React, React Native, PostgreSQL, GraphQL and MongoDB, delivering a comprehensive feature set within 6 months with 98% sprint adherence.',
          'Architected a scalable system handling 10,000+ concurrent requests, leveraging AWS infrastructure to ensure 99.99% uptime and long-term platform growth.',
          'Designed 5+ microservices and multi-database systems, implementing advanced caching to elevate query performance by 60%.',
          'Instituted rigorous coding standards and automated workflows, diminishing PR review cycles by 30% and decreasing post-release defects by 50%.',
          'Following client feedback, led a complete system redevelopment, building microservices for authentication, core functionality, and visitor management, mitigating latency by 35% and increasing customer satisfaction by 25%.'
        ],
        projects: ['Aeria X SaaS', 'UBZ Architecture'],
        technicalStack: 'NestJS, React, AWS, Microservices'
      },
      {
        position: 'Senior Frontend Developer',
        organization: 'EasyEat AI',
        organizationUrl: 'https://easyeat.ai/',
        duration: 'Mar 2022 - Apr 2023',
        description: [
          'Engineered a centralized synchronization engine for Menu Management and Inventory COGS using advanced State Management patterns, guaranteeing real-time data consistency across 150+ merchants and boosting a 35% increase in operational efficiency.',
          'Pioneered a scalable, hardware-agnostic printing system to handle high-frequency transaction logs, providing seamless integration across diverse hardware environments and securing 99.9% reliability during peak traffic.',
          'Directed the frontend localization and architectural adaptation of the Partner App for the Indonesia market, certifying 100% feature parity and optimizing app performance and stability for 50,000+ users.'
        ],
        projects: ['Merchant Sync Engine', 'Universal Print Service'],
        technicalStack: 'React, Node.js, Hardware Integration'
      },
      {
        position: 'Senior Software Developer',
        organization: 'Maximl',
        organizationUrl: 'https://maximl.com/',
        duration: 'Nov 2021 - Mar 2022',
        description: [
          'Resolved frontend system logic to enhance interface stability utilizing Angular and Ng-Zorro, resulting in a 40% reduction in user-reported issues for a global user base of 20,000+ users.',
          'Upgraded complex frontend workflows to verify high-performance rendering and seamless user interactions, reducing UI render latency by 45% within enterprise-level industrial environments.'
        ],
        projects: ['Connected Worker Platform'],
        technicalStack: 'Angular, Ng-Zorro'
      },
      {
        position: 'Software Development Engineer',
        organization: 'Edfora Infotech Pvt. Ltd. (myPAT)',
        organizationUrl: 'https://mypat.in/',
        duration: 'Jul 2019 - Nov 2021',
        description: [
          'Orchestrated the end-to-end development of myPAT v4 from the ground up, architecting a scalable frontend using Angular and NgRx to manage complex, multi-step user onboarding and core assessment workflows.',
          'Implemented a robust, unidirectional data flow using NgRx Store and Effects, centralizing application state to establish data consistency and predictable UI behavior for over 50,000+ active users.',
          'Collaborated with UX teams to revitalize core products (myPAT, Watson, VoD), turning down the UX issues by 30% via modular system redesign.'
        ],
        projects: ['myPAT v4', 'Watson'],
        technicalStack: 'Angular, NgRx, RxJS'
      },
      {
        position: 'Software Developer Intern',
        organization: 'iBHubs',
        organizationUrl: 'https://ibhubs.co/',
        duration: 'Sep 2018 - Jul 2019',
        description: [
          'Facilitated the development of scalable APIs and automated test suites using Django, which fortified system reliability and minimized bug incidents by 25%.',
          'Engineered high-performance web applications utilizing React, optimizing component architecture and state management to enhance user experience and platform responsiveness from 280ms -> 120ms (57% improvement).'
        ],
        projects: ['iBCricket'],
        technicalStack: 'Django, ReactJS'
      }
    ];
  }

  getCommunityData() {
    this.communityData = [
      {
        organization: 'UK Tech Community',
        organizationUrl: 'https://www.google.com/search?q=UK+Tech+Community',
        position1: 'Volunteer & Mentor',
        duration1: 'Sep 2023 - Present',
        description1: [
          'Expanded community impact in the UK by participating in 15+ tech meetups, including volunteering at DevFest London.',
          'Served as a Student Mentor for 40+ students for C programming, fostering peer-to-peer learning environments.'
        ]
      },
      {
        organization: 'GDG Jalandhar',
        organizationUrl: 'https://gdgjalandhar.com/',
        position: 'Organizer',
        duration: 'Jun 2017 - Jun 2023',
        description: [
          'Spearheaded growth for the local chapter, increasing the member base from 1000 to 5000+ members, leading to a 40% increase in active participation.',
          'Organized 50+ flagship tech events, including DevFest Jalandhar, impacting 2000+ women developers and tech enthusiasts regionally.',
          'Planned and presented at 300+ tech events across India, strengthening regional developer engagement by 80%.'
        ],
        position1: 'Co-Organizer',
        duration1: 'Feb 2018 – Jun 2017',
        description1: [`Organized various events all over Punjab on behalf of GDG Jalandhar and delivered technical sessions on 
        Actions on Google, Dialogflow, Firebase, PWA and Web Fundamentals.
        Also, contributed in projects/web apps of GDG Jalandhar for the upcoming events.`],
        position2: 'Co-Organizer',
        duration2: 'Oct 2016 – Jun 2017',
        description2: [
          'Volunteered in multiple events and planned the meetups of behalf of GDG Jalandhar.'
        ]
      },
      {
        organization: 'Women Techmakers',
        organizationUrl: 'https://www.womentechmakers.com/',
        position1: 'WTM Ambassador',
        duration1: 'Nov 2017 - Present',
        description1: [
          'Spearheaded growth for the local chapter, increasing the member base from 1000 to 5000+ members, leading to a 40% increase in active participation.',
          'Organized 50+ flagship tech events, including DevFest Jalandhar, impacting 2000+ women developers and tech enthusiasts regionally.'
        ],
        position2: 'Team Member',
        duration2: 'Nov 2016 - Nov 2017',
        description2: [
          'Organized and volunteered the events, specially for female developers and promoted diversity in the community and technical field.'
        ]
      },
      {
        organization: '#IamRemarkable',
        organizationUrl: 'https://iamremarkable.withgoogle.com/',
        position1: '#IamRemarkable Facilitator',
        duration1: 'May 2019 – Present',
        description1: [
          'Hosted 20+ international workshops for 800+ participants to address self-promotion, societal bias, and inclusion from diverse professional backgrounds.'
        ]
      }
    ];
  }
}

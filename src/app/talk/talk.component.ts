import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  talksData = [];

  constructor() { }

  ngOnInit() {
    this.getTalksData();
  }

  getTalksData() {
    this.talksData = [
      [
      {
        "title": "Mentorship Session",
        "event": "International Women's Day 2024",
        "link": "NA",
        "venue": "Virtual",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/0cfc8411-07fb-4dcd-b0e3-273a45c0142c",
        "products": ["AMP", "PWA", "Flutter", "TWA", "Gen AI", "ML Models"],
        "description": "Targeted for women in tech for 20 hours over a span of a month from 29 feb 2024 to 31 march 2024 to enlighten them about recent technologies. Topics included Gen AI, ML Models, Flutter, and Open Source. Duration: 20 Hours. Applied Skills: AI/ML, AR/VR, Design, JavaScript, Open source, web, Frontend/Fullstack Development, and UX/UI.",
        "organization": "Women Techmakers",
        "date": "29-02-2024"
      },
      {
        "title": "#IamRemarkable Workshop",
        "event": "#BreakingBarriers by Women's Web",
        "link": "https://x.com/womensweb/status/1654455326262059009",
        "venue": "Google Gurugram",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/0537f7ba-05fc-48f5-a45f-01ff291087e5",
        "products": [],
        "description": "Facilitated the #IamRemarkable Workshop focused on self-branding and societal biases. Duration: 90 Minutes. Attendees: 30., 90 minutes, Applied Skills: Active Listening, Communication, Critical Thinking, Diversity, and Personal Brand.",
        "organization": "Women's Web",
        "date": "05-05-2023"
      },
      {
        "title": "#IamRemarkable Workshop",
        "event": "International Women's Day 2023 Jalandhar - #DareToBe",
        "link": "NA",
        "venue": "PCBT, Phagwara, Punjab, India",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/77307b78-b6d4-4dc0-a64a-73dfb69fb5e1",
        "products": [],
        "description": "Hosted the 17th #IamRemarkable Workshop for 75 attendees to uplift women in tech. Duration: 90 Minutes. Applied Skills: Public Speaking, Inclusion, Personal Brand, and Teamwork.",
        "organization": "WTM Jalandhar",
        "date": "08-04-2023"
      },
      {
        "title": "#IamRemarkable Workshop",
        "event": "International Women's Day 2023 Jalandhar",
        "link": "NA",
        "venue": "LPU, Jalandhar, Punjab, India",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/c3e79526-70ff-45df-9fd3-21e91cbdc317",
        "products": [],
        "description": "Hosted the 17th #IamRemarkable Workshop for 75 attendees to uplift women in tech. Duration: 90 Minutes. Applied Skills: Public Speaking, Inclusion, Personal Brand, and Teamwork.",
        "organization": "WTM Jalandhar",
        "date": "07-04-2023"
      },
      {
        "title": "Buckle Up & Shine",
        "event": "International Women's Day 2023 Jalandhar",
        "link": "NA",
        "venue": "CGC, Chandigarh, Punjab, India",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/762e3b5e-af02-4691-9425-6a56352dc6cc",
        "products": [],
        "description": "Motivational talk focused on inspiring Women in Tech to have a sound career. Duration: 70 Minutes. Attendees: 110. Applied Skills: Communication, Personal Brand, and Public Speaking.",
        "organization": "DSC CGC",
        "date": "02-02-2023"
      },
      {
        "title": "Panel Discussion",
        "event": "International Women's Day 2023 Jalandhar",
        "link": "NA",
        "venue": "Thapar University, Patiala, Punjab, India",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/c1b45470-38fb-4bb4-b122-7dee1dcdd99c",
        "products": [],
        "description": "Panel discussion about the journey and steps to have a career in Tech. Duration: 50 Minutes. Attendees: 150. Applied Skills: Diversity, Inclusion, and Verbal Communication.",
        "organization": "DSC TIET",
        "date": "01-02-2023"
      },
      {
        "title": "Welcome Keynote",
        "event": "DevFest Jalandhar",
        "link": "https://x.com/GDGJalandhar/status/1581509422618402818",
        "venue": "The Cabbana, Phagwara, Punjab, India",
        "imageUrl": "https://pbs.twimg.com/media/FfKsr1OUoAEioTZ?format=jpg&name=large",
        "products": ["Web", "UX/UI", "PWA"],
        "description": "Technical talk on best practices and ways to enhance web app performance and user experience. Duration: 30 Minutes. Attendees: 1500. Applied Skills: Adaptability and Public Speaking.",
        "organization": "GDG Jalandhar",
        "date": "16-10-2022"
      },
      {
        "title": "Enhance Web Performance & User Experience",
        "event": "Google I/O Extended Jalandhar - Web Edition",
        "link": "NA",
        "venue": "PCBT, Phagwara, Punjab, India",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/2ac9188d-3160-4260-8291-ffc2ea9d86ed",
        "products": ["Web", "UX/UI", "PWA"],
        "description": "Technical talk on best practices and ways to enhance web app performance and user experience. Duration: 45 Minutes. Attendees: 150. Applied Skills: Adaptability and Public Speaking.",
        "organization": "GDG Jalandhar",
        "date": "19-06-2022"
      },
      {
        "title": "Best Practices on Web",
        "event": "Google I/O Extended Delhi",
        "link": "https://x.com/sakshamtaneja00/status/1535523388487507968",
        "venue": "Gurugram, India",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/2ac9188d-3160-4260-8291-ffc2ea9d86ed",
        "products": ["Web", "UX/UI", "PWA"],
        "description": "Technical talk on best practices and ways to enhance web app performance and user experience. Duration: 45 Minutes. Attendees: 200. Applied Skills: Adaptability and Public Speaking.",
        "organization": "GDG New Delhi",
        "date": "11-06-2022"
      },
      {
        "title": "Google I/O Updates",
        "event": "Google I/O Extended Jalandhar",
        "link": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/ae32c424-032f-4ebe-950d-8833c9a527a6",
        "venue": "LPU, Jalandhar, Punjab, India",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/ccf545b3-c225-4b85-b997-d25d43cdeaf9",
        "products": ["Google I/O 2022"],
        "description": "Delivered a Keynote Speech regarding the latest announcements and product updates at Google I/O 2022. Attendees: 200. Duration: 15 Minutes. Applied Skills: Active Listening, Creativity, Communication, Public Speaking, and Teamwork.",
        "organization": "GDG Jalandhar",
        "date": "15-05-2022"
      },

        // need to add here
      {
        "title": "#IamRemarkable Workshop Series (06)",
        "event": "#IamRemarkableWeek",
        "link": "https://www.linkedin.com/feed/update/urn:li:activity:6733048044725522432/",
        "venue": "Virtual / Global",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/5ad255c3-8e29-4bdc-806b-a2afd1ea23c0",
        "products": [],
        "description": "Hosted a series of 6 global workshops for DSC-IGDTUW, DSC-CU, and the general community. Total Duration: 120 Minutes. Total Attendees: 24. Skills: Critical Thinking, Leadership, Well-being, and Management.",
        "organization": "#IamRemarkable | DSC IGDTUW",
        "date": "19-11-2020"
      }, 
      {
        "title": "#IamRemarkable Workshop Series (05)",
        "event": "#IamRemarkableWeek",
        "link": "https://x.com/GDG_IGDTUW/status/1328559298184507393",
        "venue": "Virtual - DSC IGDTUW",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/7c3fd6df-29ac-4d70-a940-2c35ca3b39b8",
        "products": [],
        "description": "Hosted a series of 6 global workshops for DSC-IGDTUW, DSC-CU, and the general community. Total Duration: 120 Minutes. Total Attendees: 120. Skills: Critical Thinking, Leadership, Well-being, and Management.",
        "organization": "#IamRemarkable | DSC IGDTUW",
        "date": "16-11-2020"
      }, 
      {
        "title": "#IamRemarkable Workshop Series (04)",
        "event": "#IamRemarkableWeek",
        "link": "https://www.linkedin.com/posts/varshajaiswal_iamremarkable-dsccu-devcommunityroadshow-activity-6729665629089001472-w13l/",
        "venue": "Virtual - DSC CU",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/440062fe-a2e5-4299-9675-f22d69854d0d",
        "products": [],
        "description": "Hosted a series of 6 global workshops for DSC-IGDTUW, DSC-CU, and the general community. Total Duration: 120 Minutes. Total Attendees: 34. Skills: Critical Thinking, Leadership, Well-being, and Management.",
        "organization": "#IamRemarkable | DSC CU",
        "date": "15-11-2020"
      },        
      {
        "title": "#IamRemarkable Workshop Series (03)",
        "event": "#IamRemarkableWeek",
        "link": "https://www.linkedin.com/feed/update/urn:li:activity:6733048044725522432/",
        "venue": "Virtual / Global",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/8c55a1fd-de4b-4f52-828f-687c661dc828",
        "products": [],
        "description": "Hosted a series of 6 global workshops for DSC-IGDTUW, DSC-CU, and the general community. Total Duration: 120 Minutes. Total Attendees: 12. Skills: Critical Thinking, Leadership, Well-being, and Management.",
        "organization": "#IamRemarkable | Google",
        "date": "13-11-2020"
      },
      {
        "title": "#IamRemarkable Workshop Series (02)",
        "event": "#IamRemarkableWeek",
        "link": "https://x.com/_varshajaiswal_/status/1327025751741267969",
        "venue": "Virtual - GDG Jalandhar",
        "imageUrl": "https://media.licdn.com/dms/image/v2/C5622AQE945S58Gvcrw/feedshare-shrink_800/feedshare-shrink_800/0/1605222564888?e=1768435200&v=beta&t=sJkr5eSqwfQhfH5hL8R6OHOOY4Zd79irXxiflfjMiuM",
        "products": [],
        "description": "Hosted a series of 6 global workshops for DSC-IGDTUW, DSC-CU, and the general community. Total Duration: 120 Minutes. Total Attendees: 20. Skills: Critical Thinking, Leadership, Well-being, and Management.",
        "organization": "#IamRemarkable | GDG WTM Jalandhar",
        "date": "12-11-2020"
      },
      {
        "title": "#IamRemarkable Workshop Series (01)",
        "event": "#IamRemarkableWeek",
        "link": "https://www.linkedin.com/feed/update/urn:li:activity:6732743055025180672/",
        "venue": "Global / Virtual",
        "imageUrl": "https://media.licdn.com/dms/image/v2/C5622AQErspZXlBMfUQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1605215410785?e=1768435200&v=beta&t=2DQ7Zmab0_edYddZwsEWuG_ezroUsB63ql0QrKnV6Ko",
        "products": [],
        "description": "Hosted a series of 6 global workshops for DSC-IGDTUW, DSC-CU, and the general community. Total Duration: 120 Minutes. Total Attendees: 15. Skills: Critical Thinking, Leadership, Well-being, and Management.",
        "organization": "#IamRemarkable | Google",
        "date": "12-11-2020"
      },
      {
        "title": "#IamRemarkable Workshop",
        "event": "GDG Rajkot Session",
        "link": "https://x.com/GDGRajkot/status/1309804397698772992",
        "venue": "Virtual",
        "imageUrl": "https://storage.googleapis.com/advocu-wtm/wtm/activity-photos/230198d0-9289-4d86-94b0-17c861647b06",
        "products": [],
        "description": "Session on self-promotion and its importance. Duration: 120 Minutes. Attendees: 35. Skills: Verbal Communication, Diversity, and Personal Brand.",
        "organization": "GDG Rajkot",
        "date": "26-10-2020"
      },
      {
        title: 'Keep The Hopes High',
        event: 'WTM Jalandhar Celebration 6.0',
        link: 'https://youtu.be/bGtPI6Iqj08',
        venue: 'Webinar',
        imageUrl: '../../assets/talks/2020/keepTheHopesHigh.png',
        products: [],
        description: `Discussed the scenarios people are facing these days,
        what inspires us to wake up next morning and thrive to achieve our goal.
        What are the opportunities available and what are things where we can invest our time rather
        than getting bored.`,
        organization: 'WTM Jalandhar',
        date: '23-08-2020'
      },
      {
        title: 'Welcome Keynote',
        event: 'WTM Jalandhar Celebration 6.0',
        link: 'https://youtu.be/_pIZgyW5gNQ',
        venue: 'Webinar',
        imageUrl: '../../assets/talks/2020/welcome-wtm.png',
        products: [],
        description: `Kickstarted the event by covering the outstanding stats about the WTM Jalandhar
         along with the important announcements on behalf of the team, i.e., 
        'Together We Rise' Initiative and headed the agenda & flow of the sessions ahead.`,
        organization: 'WTM Jalandhar',
        date: '23-08-2020'
      },
      {
        title: 'Angular 101',
        event: 'Angular Day',
        link: 'https://youtu.be/rrs97lbZXHY?t=9008',
        venue: 'Webinar',
        imageUrl: '../../assets/talks/2020/angularDay.png',
        products: [],
        description: `In this talk, I covered the basics about Angular,
         dived into its history and versions along with initial steps to design an angular application.
         The talk was more focused about the basic concepts and important features of Angular.`,
        organization: 'GDG Mysuru',
        date: '25-07-2020'
      },
      {
        title: 'Welcome Keynote',
        event: 'Android 11 Meetup',
        link: 'https://youtu.be/LhrHjB3Gh7E',
        venue: 'Webinar',
        imageUrl: '../../assets/talks/2020/android11.png',
        products: [],
        description: `Fostered the event by sharing my thoughts on various programmes and
        examples where Android has been the gift for human-kind. 
        Discussed about programmes like Internet Sathi that how it played important role for the women in India.`,
        organization: 'GDG Jalandhar',
        date: '19-07-2020'
      },
      {
        title: 'Unboxing PWAs',
        event: 'HackJaipur',
        link: 'https://www.youtube.com/watch?v=EpELOmo4IfU',
        venue: 'Webinar',
        imageUrl: '../../assets/talks/2020/hackjaipur.jpeg',
        products: ['PWA'],
        description: `This talk covers what Progressive Web Apps are, why and how it came in the picture,
        discussed about the steps to have our own PWA, and how
        it benefitted the companies who stepped out to have their PWA.`,
        organization: 'HackJaipur, Jaipur',
        date: '18-06-2020'
      },
      {
        title: 'Ice-Breaker Session',
        event: 'IWD India 2020',
        link: 'https://youtu.be/uDiYTfFhFeA',
        venue: 'Webinar',
        imageUrl: '../../assets/talks/2020/iwd-india.jpeg',
        products: [],
        description: `Conducted an Ice-breaker session in the 4-day long event to talk about inspiring women
        in tech around us. The session was to interact with the audience and have a engaging online session in
        between the tech/non-tech sessions.`,
        organization: 'Women Techmakers India',
        date: '24-05-2020'
      },
      {
        title: 'From attendee to Co-Organizer',
        event: 'From attendee to Co-organizer',
        link: '#',
        venue: 'Webinar',
        imageUrl: '../../assets/talks/2020/fac-webinar.jpeg',
        products: [],
        description: `Talked about my journey that how community helped me in different aspects. Be it personal or professional.
        This talk was centric around various opportunities where we can work to uplift ourselves.
        It was also about Coding, Career and Women in Tech.`,
        organization: 'Talk-E-sentials, Bhopal',
        date: '10-05-2020'
      },
      {
        title: 'Discussion on Coding, Career and Women in Tech',
        event: 'Where do I start?',
        link: '#',
        venue: 'Webinar',
        imageUrl: '../../assets/talks/2020/wdis-webinar-tbh.jpeg',
        products: [],
        description: `Open discussion on Coding, Career and Women in Tech that how to start and keep the
         zeal high in choosing a particular field and moving forward with the specializations.`,
        organization: '#techbyHer, Facebook Developer Circles, Bhopal',
        date: '18-04-2020'
      },
      {
        title: `International Women's Day 2020`,
        event: `International Women's Day 2020`,
        link: 'https://www.facebook.com/events/s/international-womens-day-2020-/598497557371860/',
        venue: 'Swami Devi Dyal Group of Professional Institutions, Chandigarh',
        imageUrl: '../../assets/talks/2020/iwd20-sddgpi.jpg',
        products: [],
        description: `Hosted #IamRemarkable workshop for the students of SDDGPI to talk
         about self-motivation and self-promotion on the eve of IWD celebration.`,
        organization: 'Swami Devi Dyal Group of Professional Institutions, Chandigarh',
        date: '06-03-2020'
      },
      {
        title: `Let's talk about Community Programs`,
        event: 'Firebase Study Jam',
        link: 'https://www.meetup.com/GDG-Chandigarh/events/261473061/',
        venue: 'NIT Jalandhar',
        imageUrl: '../../assets/talks/2020/firebase-study-jam-2020.jpg',
        products: [],
        description: `Talked about the various programs by the Google Developers like GDG, WTM, DSC,etc.,
        for the people in different stages. Kickstarted the event by addressing the speakers and the audience.`,
        organization: 'Google Developers Group, Jalandhar',
        date: '22-02-2020'
      },
      {
        title: 'Unboxing Progressive Web App (PWA)',
        event: 'DevFest Nagpur 2019',
        link: 'https://www.meetup.com/GDG-Nagpur/events/263384390/',
        venue: 'Persistent Systems Limited, Nagpur',
        imageUrl: '../../assets/talks/2019/devfest-nagpur-2019.jpg',
        products: [
          'Progressive Web Apps'
        ],
        description: `Mainly focused on the basic introduction of Progressive Web App
         along with the hot questions on the topic like, why PWA is needed and is in demand.`,
        organization: 'Google Developers Group, Nagpur',
        date: '05-10-2019'
      },
      {
        title: '#IamRemarkable Workshop',
        event: 'DevFest Punjab 2019',
        link: 'https://www.meetup.com/GDG-Jalandhar/events/263546577/',
        venue: 'The LaLit, Chandigarh',
        products: [],
        imageUrl: '../../assets/talks/2019/devfest-punjab-2019.jpeg',
        description: `Hosted the workshop on the #IamRemarkable initiative by Google, to motivate people by talking
         about their achievements and accomplishments.`,
        organization: 'Google Developers Group, Jalandhar & Chandigarh',
        date: '28-09-2019'
      },
      {
        title: `What's new in Actions On Google`,
        event: `Google I/O'19 Extended`,
        link: 'https://www.meetup.com/GDG-Chandigarh/events/261473061/',
        venue: 'Infosys Limited, Chandigarh',
        products: [],
        imageUrl: '../../assets/talks/2019/io19-chandigarh.jpg',
        description: 'Delivered talk on the latest updates of Google Assistant and Actions on Google.',
        organization: 'Google Developers Group, Chandigarh',
        date: '29-06-2019'
      },
      {
        title: '#IamRemarkable Workshop',
        event: `Google I/O'19 Extended`,
        link: 'https://www.meetup.com/GDG-Jalandhar/events/261312647/',
        venue: 'Lovely Professional University, Jalandhar',
        products: [],
        imageUrl: '../../assets/talks/2019/io19-iar.jpg',
        description: `Talked why Self-branding is important and not about bragging.
         Also, held a group discussion session on #IamRemarkable.`,
        organization: 'Google Developers Group, Jalandhar',
        date: '23-06-2019'
      },
      {
        title: 'Workshop on Actions on Google',
        event: `Google I/O'19 Extended`,
        link: 'https://www.meetup.com/GDG-Jalandhar/events/261312647/',
        venue: 'Lovely Professional University, Jalandhar',
        products: [],
        imageUrl: '../../assets/talks/2019/io19-aog.jpg',
        description: `Delivered talk on Basics of Actions on Google and DialogFlow with an
         introduction about how to make actions on Google Assistant.`,
        organization: 'Google Developers Group, Jalandhar',
        date: '23-06-2019'
      },
      {
        title: '#IamRemarkable Workshop',
        event: `Google Cloud Next'19 Extended`,
        link: 'https://www.meetup.com/GDG-Jalandhar/events/260638018/',
        venue: 'CT Group of Institutions, Jalandhar',
        products: [],
        imageUrl: '../../assets/talks/default.jpg',
        description: `Talked why Self-branding is important and not about bragging.
         Also, held a group discussion session on #IamRemarkable.`,
        organization: 'Google Developers Group, Jalandhar',
        date: '18-05-2019'
      },
      {
        title: `Why I'm Remarkable?`,
        event: `International Women's Day Celebration`,
        link: 'https://www.meetup.com/GDG-Jalandhar/events/259353071/',
        venue: 'Apeejay Institute of Managment Technical Campus, Jalandhar',
        products: [],
        imageUrl: '../../assets/talks/2019/iwd19.jpg',
        description: `Talked why Self-branding is important and not about bragging.
         Also, held a group discussion session on Why I'm Remarkable.`,
        organization: 'Google Developers Group, Jalandhar',
        date: '31-03-2019'
      },
      {
        title: 'Google Cloud Infrastructure',
        event: `Google Cloud Next'18 Extended`,
        link: 'https://www.meetup.com/GDG-Jalandhar/events/252054921/',
        venue: 'Lovely Professional University, Jalandhar',
        products: [
          'Google Cloud Platform'
        ],
        imageUrl: '../../assets/talks/2018/next18.jpg',
        description: 'Talk on Google Cloud Platform (GCP), which offers dozens of IaaS, PaaS, and SaaS services.',
        organization: 'Google Developers Group, Jalandhar',
        date: '15-09-2018'
      },
      {
        title: 'Intro to Google Assistant',
        event: '#IndiaBuildActions v2',
        link: 'https://www.meetup.com/GDG-Jalandhar/events/252492273/',
        venue: 'Apeejay Institute of Managment Technical Campus, Jalandhar',
        products: [
          'Actions on Google',
          'Dialogflow',
          'Google Assistant'
        ],
        imageUrl: '../../assets/talks/default.jpg',
        description: 'Intoduction to the Google Assistant and the platform which are needed to have your own assistant.',
        organization: 'Google Developers Group, Jalandhar',
        date: '14-07-2018'
      },
      {
        title: 'Intro to Actions on Google',
        event: '#IndiaBuildActions v1',
        link: 'https://www.meetup.com/GDG-Jalandhar/events/252163316/',
        venue: 'Lovely Professional University, Jalandhar',
        products: [
          'Actions on Google',
          'Dialogflow',
          'Google Assistant'
        ],
        imageUrl: '../../assets/talks/2018/aog-july-2018.jpg',
        description: 'Intoduction to the Google Assistant and the platform which are needed to have your own assistant.',
        organization: 'Google Developers Group, Jalandhar',
        date: '07-07-2018'
      },
      {
        title: 'Daydream VR',
        event: `Google I/O Extended'18`,
        link: 'https://www.meetup.com/GDG-Jalandhar/events/250446187/',
        venue: 'Thapar University, Patiala',
        products: [
          'Daydream'
        ],
        imageUrl: '../../assets/talks/2018/io18.jpg',
        description: 'Introduction to Daydream, a virtual reality platform by Google.',
        organization: 'Google Developers Group, Jalandhar',
        date: '09-06-2018'
      },
      {
        title: 'Code-labs on Google Assistant',
        event: 'Build Actions for your Community',
        link: 'https://www.meetup.com/GDG-Jalandhar/events/248289920/',
        venue: 'Lovely Professional University, Jalandhar',
        products: [
          'Actions on Google',
          'Dialogflow',
          'Google Assistant'
        ],
        imageUrl: '../../assets/talks/default.jpg',
        description: `Delivered a hands-on session on How to create your own agent on
         Dialogflow and publish your own assistant on Google Assistant.`,
        organization: 'Google Developers Group, Jalandhar',
        date: '15-04-2018'
      },
      {
        title: 'Machine Learning with Google Cloud Platform',
        event: 'TensorFlow Dev Summit Extended',
        link: 'https://www.meetup.com/GDG-Jalandhar/events/247831167/',
        venue: 'Lovely Professional University, Jalandhar',
        products: [
          'Machine Learning',
          'Google Cloud Platform'
        ],
        imageUrl: '../../assets/talks/2018/tf18.jpg',
        description: 'Talked about various features and APIs provided by Google Cloud Platform to implement Machine Learning Algorithms.',
        organization: 'Google Developers Group, Jalandhar',
        date: '07-04-2018'
      },
      {
        title: 'Keynote and Motivational Talk',
        event: `International Women's Day Celebration`,
        link: 'https://www.meetup.com/GDG-Jalandhar/events/247147798/',
        venue: 'Lovely Professional University, Jalandhar',
        products: [],
        imageUrl: '../../assets/talks/2018/iwd18.jpg',
        description: 'Keynote and Motivational Speech',
        organization: 'Google Developers Group, Jalandhar',
        date: '17-03-2018'
      },
      {
        title: 'Keynote Talk',
        event: 'Code with GSoC and Google CodeIn',
        venue: 'Thapar University, Patiala',
        link: 'https://www.meetup.com/GDG-Jalandhar/events/247148017/',
        products: [],
        imageUrl: '../../assets/talks/2018/gsoc18.jpg',
        description: 'Keynote',
        organization: 'Google Developers Group, Jalandhar',
        date: '04-03-2018'
      },
      {
        title: 'Keynote Talk',
        event: 'Google Cloud Study Jams',
        link: 'https://www.meetup.com/GDG-Jalandhar/events/246544600/',
        venue: 'Lovely Professional University, Jalandhar',
        products: [],
        imageUrl: '../../assets/talks/default.jpg',
        description: 'Keynote speaker',
        organization: 'Google Developers Group, Jalandhar',
        date: '17-02-2018'
      },
      {
        title: 'Web Development Bootcamp',
        event: 'Zero2Web',
        venue: 'Lovely Professional University, Jalandhar',
        link: 'NA',
        products: [
          'HTML',
          'CSS',
          'Mobirise'
        ],
        imageUrl: '../../assets/talks/default.jpg',
        description: '',
        organization: 'Developer Students Club - LPU',
        date: '20-09-2017'
      },
      {
        title: 'Talk on Fundamentals of Web',
        event: 'WebCast 1.0',
        link: 'https://www.meetup.com/GDG-Jalandhar/events/243356975/',
        venue: 'NIT Jalandhar',
        products: [
          'HTML'
        ],
        imageUrl: '../../assets/talks/default.jpg',
        description: 'Talked about the basics of Web and how to proceed in it further.',
        organization: 'Google Developers Group, Jalandhar',
        date: '17-09-2017'
      },
      {
        title: 'Talk on Community Programs and Women in Technology',
        event: `International Women's Day Celebration`,
        link: 'https://www.facebook.com/events/616782708531487/',
        venue: 'Lovely Professional University, Jalandhar',
        products: [],
        imageUrl: '../../assets/talks/2017/iwd17.jpg',
        description: `Introduction to the community programs initiated by Google like GDG, WTM, DSC,
         etc which was proceeded by the agenda of the event.`,
        organization: 'Women Techmakers, Jalandhar',
        date: '27-03-2017'
      },
      {
        title: 'Intro to Community Programs',
        event: 'Google Cloud Kickstart',
        link: 'https://www.facebook.com/events/1849533431972624/',
        venue: 'NIT Jalandhar',
        products: [],
        imageUrl: '../../assets/talks/default.jpg',
        description: `Introduction to the community programs initiated by Google like GDG, WTM, DSC, etc
         which was proceeded by the agenda of the event.`,
        organization: 'Google Developers Group, Jalandhar',
        date: '26-03-2017'
      },
      {
        title: 'Intro to Google Cloud Platform',
        event: `Google Cloud Next'17 Extended`,
        link: 'https://www.facebook.com/events/401500293566052/',
        venue: 'Lovely Professional University, Jalandhar',
        products: [
          'Google Cloud Platform'
        ],
        imageUrl: '../../assets/talks/2017/next17.jpg',
        description: 'Delivered a talk on What is Google Cloud Platform and What are the various services provided by GCP.',
        organization: 'Google Developers Group, Jalandhar',
        date: '17-03-2017'
      },
      {
        title: 'Intro to Community Program',
        event: 'Appification',
        link: 'https://www.facebook.com/events/1791214987814552/',
        venue: 'Chandigarh University, Chandigarh',
        products: [],
        imageUrl: '../../assets/talks/appification-2016.jpg',
        description: `Introduction to the community programs initiated by Google like GDG, WTM, DSC,
         etc which was proceeded by the agenda of the event.`,
        organization: 'Google Developers Group, Jalandhar',
        date: '12-11-2016'
      }
    ];
  }

}

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
      {
        title: 'Unboxing PWAs',
        event: 'HackJaipur',
        link: 'https://www.youtube.com/watch?v=EpELOmo4IfU',
        venue: 'Webinar',
        imageUrl: '../../assets/talks/2020/hackjaipur.jpeg',
        products: ['PWA'],
        description: `This talk covers what PWAs are, why and how it came in the picture,
        how we can have our own PWAs, and how it benefitted the companies who stepped out to have their PWA.`,
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
        description: `Conducted a ice-breakers session in the 4-day long event, talking about inspiring women
        in tech around us. This session was to engage the audience and have a engaging online session in
         between the tech/non-tech sessions.`,
        organization: 'Women Techmakers India',
        date: '24-05-2020'
      },
      {
        title: 'From attendee to Co-organizer',
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

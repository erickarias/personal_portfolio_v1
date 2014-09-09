import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr('string'),
  contributions: DS.attr('string'),
  description: DS.attr('string'),
  thumbnail: DS.attr('string'),
  url: DS.attr('string'),
  related: DS.attr('array', { defaultValue: [] }),
});


Project.reopenClass({
  FIXTURES: [
    { id: 1,
      title: 'To Do Chicago',
      contributions: 'Visual Design | Frontend Development | Information Architecture | Branding',
      description: 'The concept my team developed for the Chicago.com was a “To do” recommend engine. We envisioned a feed that was custom tailored to your preferences. However, the format of Chicago.com changed and we moved our original concept to todo.chicago.com. We then ended up tweaking the design to capture more of the millennial demographic. I lead the team effort of the visual / UI design and branding. I also led front-end development efforts once our external development team rolled off the project. Main front-end contributions; EmberJS, SASS, Handlebars templates; experience with unit tests. ',
      thumbnail: 'assets/images/thumbnails/to-do-chicago.png',
      url: 'http://todo.chicago.com',
      related: ['assets/images/screenshots/todo-v1-home-desktop.jpg', 'assets/images/screenshots/todo-v1-cards.jpg', 'assets/images/screenshots/todo-wires.jpg', 'assets/images/screenshots/todo-v1-home-mobile.jpg', 'assets/images/screenshots/todo-v2-home-desktop.jpg', 'assets/images/screenshots/todo-v2-home-mobile.jpg' ]
    },

    { id: 2,
      title: 'Chicago.com',
      contributions: 'Visual Design | Frontend Development | Information Architecture | Branding',
      description: 'My team was asked to create a website that aggregated articles from all Wrapports publications. I worked with our UX architect on wireframes and prototypes. I was in charge of all the visual / UI design and branding for this project. Front-end development was a collaboration between myself and the developers at DevMynd. Main front-end contributions; EmberJS, SASS, Handlebars templates; experience with unit tests.',
      thumbnail: 'assets/images/thumbnails/chicago-portal.png',
      url: 'http://chicago.com',
      related: ['assets/images/screenshots/chicago-wires.jpg', 'assets/images/screenshots/chicago-home-desktop.jpg', 'assets/images/screenshots/chicago-section-mobile.jpg', 'assets/images/screenshots/chicago-article-desktop.jpg' ]
    },

    { id: 3,
      title: '@Chicago',
      contributions: 'Visual Design | Frontend Development | Information Architecture | Branding',
      description: 'While with Chicago.com we developed a platform that allowed customers to purchase @chicago.com email addresses. I worked extensively with our UX architect on developing a seamless experience for searching and buying personalized email addresses. I produced all of the visual designs for the interface and worked with an offshore team to develop the front-end of this Ruby on Rails. ',
      thumbnail: 'assets/images/thumbnails/@chicago.png',
      url: 'http://email.chicago.com',
      related: ['assets/images/screenshots/email-v2-home-desktop.jpg', 'assets/images/screenshots/email-v1-vanity.jpg', 'assets/images/screenshots/email-v2-results-mobile.jpg', 'assets/images/screenshots/email-cart.jpg', 'assets/images/screenshots/email-billing.jpg']
    },

    { id: 4,
      title: 'Naperville Sun',
      contributions: 'Visual Design | Frontend Development | Information Architecture',
      description: 'The Aggrego team was tasked with developing a new platform for all suburban community publications of the Pioneer Press. When the platform launched, we had over 40 websites using our system called “Hermes”. I was responsible for designing responsive layouts and coding templates and feature sets. I also had exposure to Ruby, VIM and unit testing. All sites were redesigned a year after launch under my supervision. ',
      thumbnail: 'assets/images/thumbnails/naperville-sun.png',
      url: 'http://napervillesun.suntimes.com',
      related: ['assets/images/screenshots/hermes-icons.jpg', 'assets/images/screenshots/hermes-v1-home.jpg', 'assets/images/screenshots/hermes-v1-home-mobile.jpg', 'assets/images/screenshots/hermes-v2-nav.jpg', 'assets/images/screenshots/hermes-v2-home.jpg', 'assets/images/screenshots/hermes-v2-home-mobile.jpg' ]
    },

    { id: 5,
      title: 'Vivid Seats',
      contributions: 'Visual Design | Frontend Development | Branding',
      description: 'Worked with a great team as designer and front-end developer to completely redesign and rebuild the Vivid Seats site. I was responsible for designing and building layouts, implementing JS features, crossbrowser testing and producing widgets for affiliate websites. ',
      thumbnail: 'assets/images/thumbnails/vivid-seats.png',
      url: 'http://vividseats.com',
      related: ['assets/images/screenshots/vs-home.jpg', 'assets/images/screenshots/vs-event.jpg', 'assets/images/screenshots/vs-login.jpg']
    },


    { id: 6,
      title: 'Chicago Sun-Times Season Pass',
      contributions: 'Visual Design | Frontend Development | Information Architecture | Branding',
      description: 'I had the opportunity to launch a new high school sports product for the Chicago Sun-Times. The site covered all Chicagoland area high schools in every ISHA sport. I was responsible for UI design, building a style guide, designing new advertising opportunities, and coding widgets to be implemented via the third party platform, Sports Ngin.',
      thumbnail: 'assets/images/thumbnails/HSC-news.png',
      items: true,
      related: ['assets/images/screenshots/hsc-splash.jpg', 'assets/images/screenshots/hsc-guide.jpg', 'assets/images/screenshots/hsc-home.jpg']
    }
  ]
});

export default Project;
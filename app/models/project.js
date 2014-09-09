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
      title: 'Chicago.com',
      contributions: 'Visual Design | Frontend Development | Information Architecture | Branding',
      description: 'Front-end developer and lead designer working with external development team and UX designer. Main Contributions to front-end; EmberJS, SASS, Handlebars templates; experience with unit tests. Helped integrate social media posts on site. Designed all branding and advertising.',
      thumbnail: 'assets/images/thumbnails/chicago-portal.png',
      url: 'http://chicago.com',
      related: ['assets/images/screenshots/chicago-wires.jpg', 'assets/images/screenshots/chicago-home-desktop.jpg', 'assets/images/screenshots/chicago-section-mobile.jpg', 'assets/images/screenshots/chicago-article-desktop.jpg' ]
    },

    { id: 2,
      title: 'To Do Chicago',
      contributions: 'Visual Design | Frontend Development | Information Architecture | Branding',
      description: 'Front-end developer and lead designer working with external development team. Main Contributions to front-end; EmberJS, SASS, Handlebars templates; experience with unit tests. Helped integrate social media posts on site. Designed all branding and advertising.',
      thumbnail: 'assets/images/thumbnails/to-do-chicago.png',
      url: 'http://todo.chicago.com',
      related: ['assets/images/screenshots/todo-v1-home-desktop.jpg', 'assets/images/screenshots/todo-v1-cards.jpg', 'assets/images/screenshots/todo-wires.jpg', 'assets/images/screenshots/todo-v1-home-mobile.jpg', 'assets/images/screenshots/todo-v2-home-desktop.jpg', 'assets/images/screenshots/todo-v2-home-mobile.jpg' ]
    },

    { id: 3,
      title: '@Chicago',
      contributions: 'Visual Design | Frontend Development | Information Architecture | Branding',
      description: 'Lead front-end developer and designer working with external offshore development team. Main contributions; Javascript, JQuery, SASS, Rails Templates; experience writing Rails helpers. Designed all branding and advertising.',
      thumbnail: 'assets/images/thumbnails/@chicago.png',
      url: 'http://email.chicago.com',
      related: ['assets/images/screenshots/email-v2-home-desktop.jpg', 'assets/images/screenshots/email-v1-vanity.jpg', 'assets/images/screenshots/email-v2-results-mobile.jpg', 'assets/images/screenshots/email-cart.jpg', 'assets/images/screenshots/email-billing.jpg']
    },

    { id: 4,
      title: 'Naperville Sun',
      contributions: 'Visual Design | Frontend Development | Information Architecture',
      description: 'Lead front-end developer and designer working with external offshore development team. Main contributions; Javascript, JQuery, SASS, Rails Templates; experience writing Rails helpers and unit tests. Worked with sales team to create responsive advertising on site.',
      thumbnail: 'assets/images/thumbnails/naperville-sun.png',
      url: 'http://napervillesun.suntimes.com',
      related: ['assets/images/screenshots/hermes-icons.jpg', 'assets/images/screenshots/hermes-v1-home.jpg', 'assets/images/screenshots/hermes-v1-home-mobile.jpg', 'assets/images/screenshots/hermes-v2-nav.jpg', 'assets/images/screenshots/hermes-v2-home.jpg', 'assets/images/screenshots/hermes-v2-home-mobile.jpg' ]
    },

    { id: 5,
      title: 'Vivid Seats',
      contributions: 'Visual Design | Frontend Development | Branding',
      description: 'Lead front-end developer and designer. Worked on design and development team to completely rebrand/redesign company site and identity. Main contributions to website; Javascript, HTML, CSS. Worked to create partnership pages for professional and college sports teams.',
      thumbnail: 'assets/images/thumbnails/vivid-seats.png',
      url: 'http://vividseats.com',
      related: ['assets/images/screenshots/vs-home.jpg', 'assets/images/screenshots/vs-event.jpg', 'assets/images/screenshots/vs-login.jpg']
    },


    { id: 6,
      title: 'Chicago Sun-Times Season Pass',
      contributions: 'Visual Design | Frontend Development | Information Architecture | Branding',
      description: 'Lead designer and code contributer for out-of-the-box front-end app and CMS. Worked with sales team to create new advertising opportunities on site. Coded HTML ad units and schedule widgets.',
      thumbnail: 'assets/images/thumbnails/HSC-news.png',
      items: true,
      related: ['assets/images/screenshots/hsc-splash.jpg', 'assets/images/screenshots/hsc-guide.jpg', 'assets/images/screenshots/hsc-home.jpg']
    }
  ]
});

export default Project;
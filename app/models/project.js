import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  thumbnail: DS.attr('string'),
  url: DS.attr('string')
});


Project.reopenClass({
  FIXTURES: [
    { id: 1,
      title: 'Chicago.com',
      description: 'Front-end developer and lead designer working with external development team. Main Contributions to front-end; EmberJS, SASS, Handlebars templates; experience with unit tests. Helped integrate social media posts on site. Designed all branding and adverstsing.',
      thumbnail: 'assets/images/thumbnails/chicago-portal.png',
      url: 'http://chicago.com'
    },

    { id: 2,
      title: '@Chicago',
      description: 'Lead front-end developer and designer working with external offshore development team. Main contributions; Javascript, JQuery, SASS, Rails Templates; experience writing Rails helpers. Designed all branding and adverstsing.',
      thumbnail: 'assets/images/thumbnails/@chicago.png',
      url: 'http://email.chicago.com'
    },

    { id: 3,
      title: 'Naperville Sun',
      description: 'Lead front-end developer and designer working with external offshore development team. Main contributions; Javascript, JQuery, SASS, Rails Templates; experience writing Rails helpers and unit tests. Worked with sales team to create responsive advertising on site.',
      thumbnail: 'assets/images/thumbnails/naperville-sun.png',
      url: 'http://napervillesun.suntimes.com'
    },

    { id: 4,
      title: 'Vivid Seats',
      description: 'Lead front-end developer and designer. Worked on design and development team to completely rebrand/redesign company site and identity. Main contributions to website; Javascript, HTML, CSS. Worked to create partnership pages for professional and college sports teams.',
      thumbnail: 'assets/images/thumbnails/vivid-seats.png',
      url: 'http://vividseats.com'
    },

    { id: 5,
      title: 'To Do Chicago',
      description: 'Front-end developer and lead designer working with external development team. Main Contributions to front-end; EmberJS, SASS, Handlebars templates; experience with unit tests. Helped integrate social media posts on site. Designed all branding and adverstsing.',
      thumbnail: 'assets/images/thumbnails/to-do-chicago.png',
      url: 'http://beta.chicago.com'
    },

    { id: 6,
      title: 'High School Cube News',
      description: 'Lead designer and code contributer for out-of-the-box front-end app and CMS. Worked with sales team to create new advertising opportunities on site. Coded HTML ad units and schedule widgets.',
      thumbnail: 'assets/images/thumbnails/HSC-news.png',
      url: 'http://highschoolcubenews.com'
    },


  ]
});

export default Project;
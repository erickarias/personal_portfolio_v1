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
      description: '',
      thumbnail: 'assets/images/thumbnails/chicago-portal.png',
      url: 'http://chicago.com'
    },

    { id: 2,
      title: '@Chicago',
      description: '',
      thumbnail: 'assets/images/thumbnails/@chicago.png',
      url: 'http://email.chicago.com'
    },

    { id: 3,
      title: 'To Do Chicago',
      description: '(I\'m sorry, this project is still in progress. Contact me for access.)',
      thumbnail: 'assets/images/thumbnails/to-do-chicago.png',
      url: 'http://beta.chicago.com'
    },

    { id: 4,
      title: 'Naperville Sun',
      description: 'Description 4',
      thumbnail: 'assets/images/thumbnails/naperville-sun.png',
      url: 'http://napervillesun.suntimes.com'
    },

    { id: 5,
      title: 'High School Cube News',
      description: 'Description 5',
      thumbnail: 'assets/images/thumbnails/HSC-news.png',
      url: 'http://highschoolcubenews.com'
    },

    { id: 6,
      title: 'Vivid Seats',
      description: 'Description 6',
      thumbnail: 'assets/images/thumbnails/vivid-seats.png',
      url: 'http://vividseats.com'
    },
  ]
});

export default Project;
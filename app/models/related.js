import DS from 'ember-data';

var Related = DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  project: DS.belongsTo('project')
});


Related.reopenClass({
  FIXTURES: [
    { id: 100,
      title: 'Chicago.com Sitemap',
      image: 'assets/images/wires/chicago-sitemap.png'
    },
    { id: 101,
      title: 'Chicago.com pages',
      image: 'assets/images/wires/chicago-pages.png'
    },
    { id: 102,
      title: 'Chicago.com content types',
      image: 'assets/images/wires/chicago-contenttypes.png'
    },
    { id: 103,
      title: ' ',
      image: 'assets/images/wires/hscnews_v1.jpg'
    },
    { id: 104,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide1.jpg'
    },
    { id: 105,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide2.jpg'
    },
    { id: 106,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide3.jpg'
    },
    { id: 107,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide4.jpg'
    },
  ]
});

export default Related;
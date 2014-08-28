import DS from 'ember-data';

var Related = DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  project: DS.belongsTo('project')
});

Related.reopenClass({
  FIXTURES: [
    { id: 1,
      title: 'Chicago.com Sitemap',
      image: 'assets/images/wires/chicago-sitemap.png'
    },
    { id: 2,
      title: 'Chicago.com pages',
      image: 'assets/images/wires/chicago-pages.png'
    },
    { id: 3,
      title: 'Chicago.com content types',
      image: 'assets/images/wires/chicago-contenttypes.png'
    },
    { id: 4,
      title: ' ',
      image: 'assets/images/wires/hscnews_v1.jpg'
    },
    { id: 5,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide1.jpg'
    },
    { id: 6,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide2.jpg'
    },
    { id: 7,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide3.jpg'
    },
    { id: 8,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide4.jpg'
    },
  ]
});

export default Related;
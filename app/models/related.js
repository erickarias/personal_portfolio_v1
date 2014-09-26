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
    { id: 200,
      title: 'Chicago.com pages',
      image: 'assets/images/wires/chicago-pages.png'
    },
    { id: 300,
      title: 'Chicago.com content types',
      image: 'assets/images/wires/chicago-contenttypes.png'
    },
    { id: 400,
      title: ' ',
      image: 'assets/images/wires/hscnews_v1.jpg'
    },
    { id: 500,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide1.jpg'
    },
    { id: 600,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide2.jpg'
    },
    { id: 700,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide3.jpg'
    },
    { id: 800,
      title: ' ',
      image: 'assets/images/wires/hscnews_guide4.jpg'
    },
  ]
});

export default Related;
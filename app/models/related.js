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
      title: 'To Do Homepage',
      image: 'assets/images/wires/todo-home.png'
    },
    { id: 104,
      title: 'Season Pass',
      image: 'assets/images/wires/hscnews_v1.jpg'
    },
    { id: 105,
      title: 'Module Guide 1',
      image: 'assets/images/wires/hscnews_guide1.jpg'
    },
    { id: 106,
      title: 'Module Guide 2',
      image: 'assets/images/wires/hscnews_guide2.jpg'
    },
    { id: 107,
      title: 'Module Guide 3',
      image: 'assets/images/wires/hscnews_guide3.jpg'
    },
    { id: 108,
      title: 'Module Guide 4',
      image: 'assets/images/wires/hscnews_guide4.jpg'
    }
  ]
});

export default Related;
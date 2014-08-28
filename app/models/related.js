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
    }
  ]
});

export default Related;
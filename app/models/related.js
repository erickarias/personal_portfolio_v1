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
      title: 'Chicago.com Sitemap',
      image: 'assets/images/wires/chicago-pages.png'
    },
    { id: 102,
      title: 'Chicago.com Sitemap',
      image: 'assets/images/wires/chicago-contenttypes.png'
    }
  ]
});

export default Related;
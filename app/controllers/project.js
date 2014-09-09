export default Ember.ObjectController.extend({
  hasRelated: function() {
    return !!this.get('items') === true;
  }.property('items'),

  nextProject: function(){
    var id = this.get('id');
    id ++;
    if (id < 7) {
      return id;
    }
  }.property('id'),

  prevProject: function(){
    var id = this.get('id');
    id --;
    return id;
  }.property('id'),
});


export default Ember.ObjectController.extend({
  nextProject: function(){
    var id = this.get('id');
    id ++;
    return id;
  }.property('id'),

  prevProject: function(){
    var id = this.get('id');
    id --;
    return id;
  }.property('id'),

  hasRelated: function() {
    return !!this.get('items') === true;
  }.property('items'),
});


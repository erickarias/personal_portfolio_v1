export default Ember.ObjectController.extend({
  hasRelated: function() {
    return !!this.get('items') === true;
  }.property('items'),
});


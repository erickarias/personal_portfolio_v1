import Ember from 'ember';
import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr('string')
});


Project.reopenClass({
	FIXTURES: [
	 {  id: 1, title: 'Yay!!!!'}
	]
});

export default Project;
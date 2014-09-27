import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PortfolioENV.locationType
});

Router.map(function() {
	this.resource('project', { path: '/:project_id'});
	this.resource('resume', { path: 'resume'});
	this.resource('about', { path: 'about'});
});

export default Router;

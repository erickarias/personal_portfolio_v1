import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PortfolioENV.locationType
});

Router.map(function() {
	this.resource('projects', { path: '/'});
});

export default Router;

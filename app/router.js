import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cv');
  this.route('contact');
  this.route('projects');
  this.route('admin');
});

export default Router;

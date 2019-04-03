import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		didClickLink(project) {
			this.get('didClickProjectLink')(project);
		}
	}
});

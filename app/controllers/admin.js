// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

	projectText: '',
	projectTitle: '',
	projectImage: '',
  type: '',

 // isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

   isDisabled: Ember.computed.not('isReadyToSend'),


 isReadyToSend: Ember.computed('projectText','projectTitle','projectImage','type',function() {
 	return this.get('type') !== '' && this.get('projectText') !== '' && this.get('projectTitle') !== '' && this.get('projectImage') !== '';

 }),



  actions: {

    addProject() {
      const title = this.get('projectTitle');
      const text = this.get('projectText');
      let image = this.get('projectImage');
      const type = this.get('type');
      const imagePath = 'assets/images/';

      if (image.indexOf(imagePath)=== -1) {
        image = imagePath + image;

        }

      const newProject = this.store.createRecord('project', { projectTitle:title,projectText:text,projectImage:image ,type:type});
      newProject.save();

     // this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
      this.set('projectTitle', '');
      this.set('projectText', '');

      this.set('projectImage', '');
      this.set('type', '');

    }
  }
}); 
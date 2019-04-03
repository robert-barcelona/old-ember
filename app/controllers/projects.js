import Ember from 'ember';

export default Ember.Controller.extend({

    currentProject: '',
    currentProjectType: '',
    currentProjects: '',

    init: function() {
        this._super(...arguments);



    },


    setData(type) {
        this.set('currentProjectType', type);

        let self = this;
       /* self.get('store').findAll('project').then(function(projects) {
            self.set('currentProjects', projects.filter(project => project.get('type') === type));

        }).catch(function(error) {
            console.log(error);
        });
*/

			console.log(this.get('model'));

            self.set('currentProjects', this.get('model').filter(project => project.get('type') === type));

       

    },



    actions: {


        changeProjectType: function(type) {
            this.setData(type);

        },


        didClickProjectLink(project) {
            this.set('currentProject', project);

        }



    }


});

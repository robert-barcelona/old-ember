import DS from 'ember-data';

export default DS.Model.extend({
  projectTitle: DS.attr('string'),
  projectText: DS.attr('string'),
  projectImage: DS.attr('string'),
  type: DS.attr('string')
});

import DS from 'ember-data'

export default DS.Model.extend({
    name: DS.attr('string'),
    f1: DS.attr('string'),
    f2: DS.attr('string')
})
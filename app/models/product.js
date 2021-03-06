import DS from 'ember-data'

export default DS.Model.extend({
    name: DS.attr('string'),
    color: DS.attr('string'),
    image: DS.attr('string'),
    price: DS.attr('string'),
    description: DS.attr('string'),
    features: DS.attr('string')
})
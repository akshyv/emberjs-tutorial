import Route from '@ember/routing/route';

export default class RailsitemsRoute extends Route {
    model() {
        return this.store.findAll('railsitem')
    }
}

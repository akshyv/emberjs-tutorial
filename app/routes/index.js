import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        const products =  await this.store.findAll('product');
        return products;
    }

    
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.color;
  }
  }

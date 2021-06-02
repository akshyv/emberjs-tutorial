  
import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  async model(params) {
    const {item_id} = params;
    const data = await this.store.findAll('product');
    const product = data.find(({ id }) => id === item_id);
    return product;
  }
  
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.color;
  }
}
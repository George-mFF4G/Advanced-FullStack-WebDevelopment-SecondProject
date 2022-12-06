import {
  Order_Products,
  Order_ProductsStore,
} from '../../models/order_products';

const opertations = new Order_ProductsStore();

describe('Index Function To Display All Order Order Products', () => {
  it('Order_Product Model Index Check', () => {
    expect(opertations.index).toBeDefined();
  });
});
describe('Show Function To Display A Specific Order Product', () => {
  it('Order_Product Model Show Check', () => {
    expect(opertations.show).toBeDefined();
  });
});
describe('Create Function To Add A New Order Product', () => {
  it('Order_Product Model Create Check ', () => {
    expect(opertations.create).toBeDefined();
  });
});
describe('Update Function To Update A Order Product', () => {
  it('Order_Product Model Update Check ', () => {
    expect(opertations.update).toBeDefined();
  });
});

describe('Delete Function To Delete A Specific Order Product', () => {
  it('Order_Product Model Delete Check', () => {
    expect(opertations.delete).toBeDefined();
  });
});
describe('Create Function To Add A New Order Product', () => {
  it('Order Model Create Test Working', async () => {
    const result = await opertations.create({
      quantity: 10,
      order_id: 1,
      product_id: 1,
    });
    expect(result.id).toEqual(2);
  });
});
describe('Index Function To Display All Order Products', () => {
  it('Order_Product Model Index Test Working', async () => {
    const result = await opertations.index();
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});
describe('Update Function To Display A Specific Order Product', () => {
  it('Order Product Model Update Test Working ', async () => {
    const order_product: Order_Products = {
      quantity: 1000,
      order_id: 1,
      product_id: 1,
    };
    const result = await opertations.update(order_product, '1');
    expect(result.quantity).toEqual(1000);
  });
});
describe('Delete Function To Delete A Specific Order Product', () => {
  it('Order_Product Model Delete Check', async () => {
    const result = await opertations.delete('2');
    expect(result).toBeUndefined();
  });
});

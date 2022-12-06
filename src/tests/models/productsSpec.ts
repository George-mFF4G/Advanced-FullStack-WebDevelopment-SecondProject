import { ProductsStore } from '../../models/products';

const opertations = new ProductsStore();

describe('Update Function To Update A Product', () => {
  it('Product Model Update Check ', () => {
    expect(opertations.update).toBeDefined();
  });
});
describe('Create Function To Add A New Product', () => {
  it('Product Model Create Test Working', async () => {
    const result = await opertations.create({
      name: 'test',
      describe: 'test',
      price: 100,
    });
    expect(result).toEqual({
      id: 2,
      name: 'test',
      describe: 'test',
      price: 100,
    });
  });
});
describe('Index Function To Display All Products', () => {
  it('Product Model Index Test Working', async () => {
    const result = await opertations.index();
    expect(result).toContain({
      id: 2,
      name: 'test',
      describe: 'test',
      price: 100,
    });
  });
});
describe('Show Function To Display A Specific Products', () => {
  it('Product Model Show Test Working', async () => {
    const result = await opertations.show('2');
    expect(result).toEqual({
      id: 2,
      name: 'test',
      describe: 'test',
      price: 100,
    });
  });
});
describe('Delete Function To Delete A Specific Product', () => {
  it('Product Model Delete Check', async () => {
    opertations.delete('2');
    const result = await opertations.index();
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});

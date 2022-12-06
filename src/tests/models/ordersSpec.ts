import { ordersStore } from '../../models/orders';

const opertations = new ordersStore();

describe('Index Function To Display All Orders', () => {
  it('Order Model Index Check', () => {
    expect(opertations.index).toBeDefined();
  });
});
describe('Show Function To Display A Specific Order', () => {
  it('Order Model Show Check', () => {
    expect(opertations.show).toBeDefined();
  });
});
describe('Create Function To Add A New Order', () => {
  it('Order Model Create Check ', () => {
    expect(opertations.create).toBeDefined();
  });
});
describe('Update Function To Update A Order', () => {
  it('Order Model Update Check ', () => {
    expect(opertations.update).toBeDefined();
  });
});

describe('Delete Function To Delete A Specific Order', () => {
  it('Order Model Delete Check', () => {
    expect(opertations.delete).toBeDefined();
  });
});

describe('Create Function To Add A New Order', () => {
  it('Order Model Create Test Working', async () => {
    const result = await opertations.create({
      user_id: 1,
      name: 'test',
      status: 'complete',
    });
    expect(result.status).toEqual('complete');
  });
});
describe('Index Function To Display All Orders', () => {
  it('Order Model Index Test Working', async () => {
    const result = await opertations.index();
    expect(result.length).toBeGreaterThanOrEqual(2);
  });
});
describe('Show Function To Display A Specific Order', () => {
  it('Order Model Show Test Working', async () => {
    const result = await opertations.show('2');
    expect(result.id).toEqual(2);
  });
});
describe('Delete Function To Delete A Specific Order', () => {
  it('Order Model Delete Check', async () => {
    opertations.delete('2');
    const result = await opertations.index();
    expect(result.length).toBeGreaterThanOrEqual(2);
  });
});

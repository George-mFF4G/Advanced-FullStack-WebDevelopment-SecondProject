import { User, usersStore } from '../../models/users';

const opertations = new usersStore();

describe('Index Function To Display All Users', () => {
  it('User Model Index Check', () => {
    expect(opertations.index).toBeDefined();
  });
});
describe('Show Function To Display A Specific User', () => {
  it('User Model Show Check', () => {
    expect(opertations.show).toBeDefined();
  });
});
describe('Register Function To Add A New User', () => {
  it('User Model Register Check ', () => {
    expect(opertations.register).toBeDefined();
  });
});
describe('Update Function To Update A User', () => {
  it('User Model Update Check ', () => {
    expect(opertations.update).toBeDefined();
  });
});

describe('Delete Function To Delete A Specific User', () => {
  it('User Model Delete Check', () => {
    expect(opertations.delete).toBeDefined();
  });
});

describe('Login Function To Login A Specific User', () => {
  it('User Model Login Check', () => {
    expect(opertations.login).toBeDefined();
  });
});

describe('Register Function To Add A New User', () => {
  it('User Model Register Test Working', async () => {
    const result = await opertations.register({
      first_name: 'test',
      last_name: 'test',
      person_details: 'test',
      username: 'test',
      user_password: 'test',
    });
    expect(result).not.toBeFalsy();
  });
});

describe('Index Function To Display All Users', () => {
  it('User Model Index Test Working', async () => {
    const result = await opertations.index();
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});
describe('Show Function To Display A Specific User', () => {
  it('User Model Create Test Working ', async () => {
    const user: User = {
      first_name: 'test',
      last_name: 'test',
      person_details: 'test',
      username: 'test',
      user_password: 'test',
    };
    const result = await opertations.update(user, '1');
    expect(result).toBeTruthy();
  });
});

describe('Delete Function To Delete A Specific User', () => {
  it('User Model Delete Check', async () => {
    const result = await opertations.delete('2');
    expect(result).toBeUndefined();
  });
});

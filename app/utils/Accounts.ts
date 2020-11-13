import storage from 'electron-json-storage';
import Profile from 'models/account';

export async function get() {
  return new Promise((res, rej) =>{
    storage.get('Accounts', (err: any, data: Account) => {
      if(err) rej(err);
      res(data);
    });
  });
}

export async function add(account: Account) {
  return new Promise((res, rej) => {
    storage.set('Accounts', account, async (err:any) => {
      if(err) rej(err);
      res(await get());
    });
  });
}

export async function update(account: Account) {
  let mode_Account = await get();

  const updatedAccount = mode_Account.map((item : Account) =>{
    if(item.id == account.id) {
      Object.keys(item).forEach((key: string) => {
        item[key] = account[key];
      });

    }
    return item;
  });

  return new Promise((res, rej) => {
    storage.set('Accounts', updatedAccount, async (err: any) => {
      if(err) rej(err);
      res(await get());
    });
  });
}

export async function remove(account: Account) {
  let mode_Account = await get();

  const removedAccount = mode_Account.filter((item: Account) => item.id != account.id);

  return new Promise((res, rej) => {
    storage.set('Accounts', removedAccount, async (err) => {
      if(err) rej(err);
      res(await get())
    });

  });
}

import storage from 'electron-json-storage';
import Proxy from 'models/proxy';

export async function get() {

  return new Promise((res, rej) =>{
    storage.get('Proxies', (err: any, data: Proxy) => {
      if(err) rej(err);
      res(data);
    });
  });
}

export async function add(proxy: Proxy) {
  return new Promise((res, rej) => {
    storage.set('Proxies', proxy, async (err:any) => {
      if(err) rej(err);
      res(await get());
    });
  });
}

export async function update(proxy: Proxy) {
  let mode_Proxy = await get();

  const updatedProxy = mode_Proxy.map((item : Proxy) =>{
    if(item.id == proxy.id) {
      Object.keys(item).forEach((key: string) => {
        item[key] = proxy[key];
      });
    }
    return item;
  });

  return new Promise((res, rej) => {
    storage.set('Proxies', updatedProxy, async (err: any) => {
      if(err) rej(err);
      res(await get());
    });
  });
}

export async function remove(proxy: Proxy) {
  let mode_Proxy = await get();

  const removedProxy = mode_Proxy.filter((item: Proxy) => item.id != proxy.id);

  return new Promise((res, rej) => {
    storage.set('Proxies', removedProxy, async (err) => {
      if(err) rej(err);
      res(await get())
    });

  });
}

import storage from 'electron-json-storage';
import Profile from 'models/profile';

export async function get() {
  return new Promise((res, rej) =>{
    storage.get('Profiles', (err: any, data: Profile) => {
      if(err) rej(err);
      res(data);
    });
  });
}

export async function add(profile: Profile) {
  return new Promise((res, rej) => {
    storage.set('Profiles', profile, async (err:any) => {
      if(err) rej(err);
      res(await get());
    });
  });
}

export async function update(profile: Profile) {
  let mode_Profile = await get();

  const updatedProfile = mode_Profile.map((item : Profile) =>{
    if(item.id == profile.id) {
      Object.keys(item).forEach((key: string) => {
        item[key] = profile[key];
      });
    }
    return item;
  });

  return new Promise((res, rej) => {
    storage.set('Profiles', updatedProfile, async (err: any) => {
      if(err) rej(err);
      res(await get());
    });
  });
}

export async function remove(profile: Profile) {
  let mode_Profile = await get();

  const removedProfile = mode_Profile.filter((item: Profile) => item.id != profile.id);

  return new Promise((res, rej) => {
    storage.set('Profiles', removedProfile, async (err) => {
      if(err) rej(err);
      res(await get())
    });

  });
}

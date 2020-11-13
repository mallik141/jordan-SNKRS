import storage from 'electron-json-storage';

let user = {};

export function loadUserFromLocalStorage() {
  return new Promise((resolve, reject) => {
    storage.get('userData', function (_error: any, data: { key?: any; }) {
      if (data.key) {
        console.log('userData', data);
        user = data;
      }
      resolve();
    });
  });
}

export function updateUserData(data: {}) {
  if (data) {
    user = data;
  }
}

export default function getUserData() {
  return user;
}

export function getUserFromLocalStorage() {
  return new Promise((resolve, reject) => {
    storage.get('userData', function (error, data) {
      if (data.key) {
        console.log('userData', data);
        resolve(data);
      }
      else {
        resolve({'message': 'authentication failer'});
      }

    });
  });
}

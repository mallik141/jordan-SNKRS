import storage from 'electron-json-storage';
import Task from 'models/task';

export async function get() {

  return new Promise((res, rej) =>{
    storage.get('Tasks', (err: any, data: Task) => {
      if(err) rej(err);
      res(data);
    });
  });
}

export async function add(task: Task) {
  return new Promise((res, rej) => {
    storage.set('Tasks', task, async (err:any) => {
      if(err) rej(err);
      res(await get());
    });
  });
}

export async function update(task: Task) {
  let mode_task = await get();

  const updatedTask = mode_task.map((item : Task) =>{
    if(item.id == task.id) {
      Object.keys(item).forEach((key: string) => {
        item[key] = task[key];
      });
    }
    return item;
  });

  return new Promise((res, rej) => {
    storage.set('Tasks', updatedTask, async (err: any) => {
      if(err) rej(err);
      res(await get());
    });
  });
}

export async function remove(task: Task) {
  let mode_task = await get();

  const removedTask = mode_task.filter((item: Task) => item.id != task.id);

  return new Promise((res, rej) => {
    storage.set('Tasks', removedTask, async (err) => {
      if(err) rej(err);
      res(await get())
    });

  });
}




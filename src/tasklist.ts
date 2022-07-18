import { v4 as uuidV4 } from 'uuid';

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  createAt: Date;
};

export const taskList = load();

export function add(title: string): void {
  const id = uuidV4();
  const completed = false;
  const createAt = new Date();

  taskList.push({ id, title, completed, createAt });

  save();
}

export function remove(id: string): void {
  const index = taskList.findIndex((task) => task.id === id);

  if (index < 0) return;

  taskList.splice(index, 1);

  save();
}

function save() {
  localStorage.setItem('tasks', JSON.stringify(taskList));
}

 function load(): Array<Task> {
  return JSON.parse(localStorage.getItem('tasks') ?? '[]');
}

import { v4 as uuidV4 } from 'uuid';
import { taskList, add, remove, Task } from './tasklist';

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.getElementById('new-task-form') as HTMLFormElement;
const input = document.querySelector<HTMLInputElement>('#new-task-title');

const tasks = taskList;
console.log(taskList)
tasks.forEach(listHandler);

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input?.value == '' || input?.value == null) return;

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createAt: new Date(),
  };

  tasks.push(newTask);

add
  console.log(add);
  listHandler(newTask);
  input.value = '';
});

function listHandler(task: Task) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    if (task.completed === true) {
      item.removeChild(label);
      remove('item');
    
    }
    remove('item')
  });

  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  label.append(checkbox, task.title as string);
  item.dataset.itemId = task.id;
  console.log(item.dataset.itemId);
  item.append(label);
  list?.append(item);
}

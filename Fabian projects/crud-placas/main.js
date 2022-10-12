import {
  saveTask,
  getTasks,
  onGetTasks,
  deleteTasks,
  getTask,
  updateTask,
} from './db.js';

const taskscontainer = document.getElementById('tasks-container');
// editar los datos
let editStatus = false;

// querysnapshot los datos que existen en ese momento como es asincrono tiene q esperar los datos con un promesa
window.addEventListener('DOMContentLoaded', async () => {
  //Loop de datos en la pantalla
  onGetTasks(querySnapshot => {
    let html = '';
    querySnapshot.forEach(docs => {
      const tasks = docs.data();
      html += `
            <div>
                <h3>${tasks.title}</h3>
                <p>${tasks.description}</p>
                <button class='btn-delete' data-id="${docs.id}">Delete</button>
                <button class='btn-edit' data-id="${docs.id}">Edit</button>
            </div>`;
    });
    taskscontainer.innerHTML = html;
    //Boton de eliminar
    const btnsDelete = taskscontainer.querySelectorAll('.btn-delete');
    btnsDelete.forEach(btn => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deleteTasks(dataset.id);
      });
    });
    //Boton de editar
    const btnEdit = taskscontainer.querySelectorAll('.btn-edit');
    btnEdit.forEach(btn => {
      btn.addEventListener('click', async e => {
        const doc = await getTask(e.target.dataset.id);
        const task = doc.data();
        taskForm['task-title'].value = task.title;
        taskForm['task-description'].value = task.description;
        editStatus = true;
      });
    });
  });
});
//Guardar formulario
const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = taskForm['task-title'];
  const descripcion = taskForm['task-description'];
  //Condicional para guardar lo editado o actulizar lo editado
  if (editStatus) {
    updateTask(title.value, descripcion.value);
  } else {
    saveTask(title.value, descripcion.value);
  }
  taskForm.reset();
});

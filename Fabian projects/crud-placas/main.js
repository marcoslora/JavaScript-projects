import {saveTask, getTasks, onGetTasks, deleteTasks} from './db.js'

const taskscontainer = document.getElementById('tasks-container')
// querysnapshot los datos que existen en ese momento como es asincrono tiene q esperar los datos con un promesa
window.addEventListener('DOMContentLoaded', async () => {
    
    onGetTasks ((querySnapshot) => {
        let html = ''
        querySnapshot.forEach(docs =>{
            const tasks = docs.data();
            html += `
            <div>
                <h3>${tasks.title}</h3>
                <p>${tasks.descripcion}</p>
                <button class='btn-delete' data-id="${docs.id}">Delete</button>
                <button class='btn-edit' data-id="${docs.id}">Edit</button>
            </div>`;
        });
        taskscontainer.innerHTML = html;
        const btnsDelete = taskscontainer.querySelectorAll('.btn-delete')
        btnsDelete.forEach(btn => {
            btn.addEventListener('click', ({target: {dataset}}) => {
                deleteTasks(dataset.id);
            });
        });
        const btnEdit = taskscontainer.querySelectorAll('.btn-edit')
        btnEdit.forEach(btn => {
            btn.addEventListener('click', e =>{
                console.log(e.target.dataset.id);
            });
        });
    });
});

const taskForm = document.getElementById('task-form')
taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = taskForm['task-title'];
    const descripcion = taskForm['task-description'];
    saveTask(title.value, descripcion.value);
    taskForm.reset();  
})
window.addEventListener("DOMContentLoaded", () => {
    console.log("funca")
})

const taskForm = document.getElementById('task-form')
taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = taskForm['task-title'].value
    const descripcion = taskForm['task-description'].value
    console.log(title, descripcion)
})
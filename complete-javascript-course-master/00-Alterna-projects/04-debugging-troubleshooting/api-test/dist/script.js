'use strict';
////00-Alterna-projects/04-debugging-troubleshooting/api-test
const database = {
  students: [
    {
      id: 1,
      firstname: 'Octavio',
      lastname: 'Kidd',
      age: 34,
    },
    {
      id: 2,
      firstname: 'Jose',
      lastname: 'Diaz',
      age: 23,
    },
    {
      id: 3,
      firstname: 'Pedro',
      lastname: 'Jimenez',
      age: 25,
    },
    {
      id: 4,
      firstname: 'Juan',
      lastname: 'Hernandez',
      age: 23,
    },
  ],
  users: [
    {
      id: 1,
      username: 'api-user',
      password: '12345',
      salt: 'abcd',
    },
  ],
};
function getStudentIndexById(id) {
  return database.students.indexOf(database.students.find(s => s.id === id));
}
const id = 4;
const index = getStudentIndexById(id);
console.log(index);
if (index >= 0) {
  database.students.splice(index, 1);
} else {
  console.log('Could not find user id ' + id + ' to delete');
}
console.log(index);
console.log(database);

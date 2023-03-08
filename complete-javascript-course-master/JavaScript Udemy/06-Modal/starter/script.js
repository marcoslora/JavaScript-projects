'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  // No se utiliza punto para las clases, se pueden agregar varia clases paradas por coma.
  //Remove se utiliza para remover una clase del DOM
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//Se utiliza para agregar una clase al DOM
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// 3 tipos de eventos del teclado keyup levantamos el dedo de una tecla , keypress continumente presionando una tecla y keydown cuando presionamos una tecla
//Se utiliza para atrapar los eventos de teclado
document.addEventListener('keydown', function (e) {
  //classlist se ulitiza para ver las clases del DOM
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

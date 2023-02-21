const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModeal = document.querySelectorAll('.show-modal');
console.log(btnOpenModeal);

const openModel = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModeal.length; i++) {
  btnOpenModeal[i].addEventListener('click', openModel);
  btnCloseModal.addEventListener('click', closeModel);
  overlay.addEventListener('click', closeModel);
}

document.addEventListener('keydown', e => {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});

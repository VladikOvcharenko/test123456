document.addEventListener('DOMContentLoaded', () => {
  // burger menu

  const burgerBtn = document.querySelector('.burger');
  const navMenu = document.querySelector('.header-nav');
  const body = document.querySelector('.page-body');
  const menuLinks = document.querySelectorAll('.header-nav a');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    navMenu.classList.toggle('header-nav--active');
    body.classList.toggle('dis-scroll');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('burger--active');
      navMenu.classList.remove('header-nav--active');
      body.classList.remove('dis-scroll');
    });
  });
  const faqItems = document.querySelectorAll('.faq-list__box');

  faqItems.forEach((item) => {
    item.addEventListener('click', () => {
      faqItems.forEach((el) => {
        if (el !== item) el.classList.remove('active');
      });

      item.classList.toggle('active');
    });
  });

  // burger menu

  // modal

  const openModalBtn = document.querySelectorAll('[data="open-modal"]');
  const closeModalBtn = document.querySelector('.modal-close');
  const modalForm = document.querySelector('.modal-form');
  const modalThx = document.querySelector('.modal-thx');

  openModalBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const modal = document.querySelector('#modal'); //
      if (modal) {
        modal.classList.add('modal-active');
      } else {
        console.error('Модальное окно с id="modal" не найдено.');
      }
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      const modal = document.querySelector('#modal');

      if (modal) {
        modal.classList.remove('modal-active');
      } else {
        console.error('Модальное окно с id="modal" не найдено.');
      }
    });
  } else {
    console.error(
      'Кнопка закрытия модального окна с классом .modal-close не найдена.'
    );
  }
  const modal = document.querySelector('#modal');
  if (modal) {
    modal.addEventListener('click', (event) => {
      const modalForm = modal.querySelector('.modal-decor');

      if (!modalForm.contains(event.target)) {
        modal.classList.remove('modal-active');
      }
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (event) => {
      event.preventDefault();

      modalForm.classList.remove('modal-form-active');
      if (modalThx) {
        modalThx.classList.add('modal-form-active');
      }
    });
  }
});

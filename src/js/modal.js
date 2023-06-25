export default () => {
  const modalButtons = document.querySelectorAll('.js-modalButton');
  modalButtons.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
      let id = btn.getAttribute('data-modal');
      document.getElementById(id).classList.add('is-modalOpen');
      if(e.currentTarget.parentElement.querySelector('.js-pickupImage')) {
        let image = e.currentTarget.parentElement.querySelector('.js-pickupImage');
        image.classList.remove('is-show');
      }
    });
  });
  const closeButtons = document.querySelectorAll(".js-modalButtonClose");
  closeButtons.forEach(function (btn) {
    btn.addEventListener('click', () => {
      let modal = btn.parentElement;
      modal.classList.remove('is-modalOpen');
    });
  });

  window.addEventListener('click', (e) => {
    e.target.classList.remove('is-modalOpen');
  });
}


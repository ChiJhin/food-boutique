export default {
  _closeModalBtn: document.querySelector('.js-close-subscribe'),
  _backdrop: document.querySelector('.js-backdrop-subscribe'),
  _modal: document.querySelector('.modal__subscribe'),
  ESC_KEY_CODE: 'Escape',
  open: function open() {
    window.addEventListener('keydown', this.esc.bind(this));
    this._closeModalBtn.addEventListener('click', this.close.bind(this));
    this._backdrop.addEventListener('click', this.backdrop.bind(this));
    document.body.classList.add('show-modal-subscribe');
  },
  close: function close() {
    window.removeEventListener('keydown', this.esc.bind(this));
    this._closeModalBtn.removeEventListener('click', this.close.bind(this));
    this._backdrop.removeEventListener('click', this.backdrop.bind(this));
    document.body.classList.remove('show-modal-subscribe');
  },
  backdrop: function backdrop(event) {
    if (event.currentTarget === event.target) {
      this.close();
    }
  },
  esc: function esc(event) {
    if (event.code === this.ESC_KEY_CODE) {
      this.close();
    }
  },
};

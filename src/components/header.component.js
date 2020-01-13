import {Component} from "../core/component";

class HeaderComponent extends Component {
  constructor(id) {
    super(id);
    this.init();
  }

  #onClickButtonStart = () => {
    localStorage.setItem('isBtnStartPressed', JSON.stringify(true));
    this.hide();
  };

  init() {
    const isBtnStartPressed = localStorage.getItem('isBtnStartPressed');

    if (isBtnStartPressed) {
      this.hide();
    }

    const button = this.$el.querySelector('.js-button-start');
    button.addEventListener('click', this.#onClickButtonStart);
  }
}

export {HeaderComponent};

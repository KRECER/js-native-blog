import {Component} from "../core/component";

const onClickButtonStart = function() {
  localStorage.setItem('isBtnStartPressed', JSON.stringify(true));
  this.hide();
};

class HeaderComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    const isBtnStartPressed = localStorage.getItem('isBtnStartPressed');

    if (isBtnStartPressed) {
      this.hide();
    }

    const button = this.$el.querySelector('.js-button-start');
    button.addEventListener('click', onClickButtonStart.bind(this));
  }
}

export {HeaderComponent};

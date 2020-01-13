import {Component} from "../core/component";

class NavigationComponent extends Component {
  constructor(id) {
    super(id);
    this.init();
  }

  #showTabItem = (name) => {
    const $tab = document.getElementById(name);
    $tab.classList.remove('hide');
  };

  #hideTabItem = (name) => {
    const $tab = document.getElementById(name);
    $tab.classList.add('hide');
  };

  #onClickTabLink = (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains('tab')) {
      const prevActiveTabLink = this.$el.querySelector('.active');
      const prevActiveTabItem = prevActiveTabLink.dataset.name;
      const activeTabLink = target;
      const activeTabItem = activeTabLink.dataset.name;

      prevActiveTabLink.classList.remove('active');
      activeTabLink.classList.add('active');
      this.#hideTabItem(prevActiveTabItem);
      this.#showTabItem(activeTabItem);
    }
  };

  init() {
    this.$el.addEventListener('click', this.#onClickTabLink);
  }
}

export {NavigationComponent};

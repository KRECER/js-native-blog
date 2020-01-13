import {Component} from "../core/component";

const showTabItem = (name) => {
  const $tab = document.getElementById(name);
  $tab.classList.remove('hide');
};

const hideTabItem = (name) => {
  const $tab = document.getElementById(name);
  $tab.classList.add('hide');
};

const onClickTabLink = function(event){
  event.preventDefault();
  const target = event.target;

  if (target.classList.contains('tab')) {
    const prevActiveTabLink = this.$el.querySelector('.active');
    const prevActiveTabItem = prevActiveTabLink.dataset.name;
    const activeTabLink = target;
    const activeTabItem = activeTabLink.dataset.name;

    prevActiveTabLink.classList.remove('active');
    activeTabLink.classList.add('active');
    hideTabItem(prevActiveTabItem);
    showTabItem(activeTabItem);
  }
};

class NavigationComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener('click', onClickTabLink.bind(this));
  }
}

export {NavigationComponent};

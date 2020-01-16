import {Component} from "../core/component";
import {NavigationFactory} from "./navigation-factory";

class NavigationComponent extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.components = [];
    registerTabs.call(this);
    this.$el.addEventListener('click', onClickTabLink.bind(this));
  }
}

const getComponentByName = function(name) {
  return this.components.find((it) => {
    return it.name === name;
  });
};

const showTabItem = function(name) {
  getComponentByName.call(this, name).show();
};

const hideTabItem = function(name) {
  getComponentByName.call(this, name).hide();
};

const registerTabs = function() {
  const tabLinks = this.$el.querySelectorAll('[data-name]');

  tabLinks.forEach((tabLink) => {
    const tabName = tabLink.dataset.name;
    this.components.push(NavigationFactory.create(tabName));
  });
};

const onClickTabLink = function(event) {
  event.preventDefault();

  if (event.target.classList.contains('tab')) {
    const prevActiveTabLink = this.$el.querySelector('.active');
    const prevActiveTabItemName = prevActiveTabLink.dataset.name;
    const activeTabLink = event.target;
    const activeTabItemName = activeTabLink.dataset.name;
    prevActiveTabLink.classList.remove('active');
    activeTabLink.classList.add('active');
    hideTabItem.call(this, prevActiveTabItemName);
    showTabItem.call(this, activeTabItemName);
  }
};

export {NavigationComponent};

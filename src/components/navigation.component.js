import {Component} from "../core/component";
import {Factory} from "./factory";

const showTabItem = (name) => {
  const component = Factory.create(name);
  component.show();
};

const hideTabItem = (name) => {
  const component = Factory.create(name);
  component.hide();
};

const onClickTabLink = function(event) {
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

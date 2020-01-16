import {Component} from "../core/component";
import {Template} from "../core/template";
import {ApiService} from "../services/api.service";

class FavoriteComponent extends Component {
  constructor(id, {preloader}) {
    super(id);
    this.preloader = preloader;
  }

  init() {
    this.$el.addEventListener('click', linkClickHandler.bind(this));
  }

  onShow() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const source = document.querySelector('#favorites-template').innerHTML;
    const render = Template.compile(source);
    this.$el.innerHTML = render(favorites);
  }

  onHide() {
    this.$el.innerHTML = '';
  }
}

async function linkClickHandler(event) {
  event.preventDefault();

  if (event.target.classList.contains('js-favorite-link')) {
    this.$el.innerHTML = '';
    this.preloader.show();
    const postId = event.target.dataset.postId;
    const post = await ApiService.fetchPostById(postId);
    this.preloader.hide();
    const source = document.getElementById('post-template').innerHTML;
    const render = Template.compile(source);
    this.$el.innerHTML = render([post]);
  }
}

export {FavoriteComponent};

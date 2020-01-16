import {Component} from "../core/component";
import {ApiService} from "../services/api.service";
import {Template} from "../core/template";

class PostsComponent extends Component {
  constructor(id, {preloader}) {
    super(id);
    this.preloader = preloader;
  }

  init() {
    this.$el.addEventListener('click', btnFavoriteClickHandler.bind(this));
  }

  async onShow() {
    this.preloader.show();
    this.$el.innerHTML = await compileTemplate();
    this.preloader.hide();
  }

  onHide() {
    this.$el.innerHTML = '';
  }
}

const btnFavoriteClickHandler = ({target}) => {
  if (target.classList.contains('js-btn-favorite')) {
    const title = target.closest('.js-post').querySelector('.js-post-title').textContent;
    const id = target.dataset.postId;
    const favorite = {id, title};

    try {
      let favorites = JSON.parse(localStorage.favorites);
      const hasId = favorites.some((it) => it.id === id);

      if (hasId) {
        localStorage.favorites = JSON.stringify(favorites.filter((it) => it.id !== id));
        target.textContent = 'Сохранить';
        target.classList.remove('button-danger');
      } else {
        favorites.push(favorite);
        target.classList.add('button-danger');
        target.textContent = 'Удалить';
        localStorage.favorites = JSON.stringify(favorites);
      }
    } catch(e) {
      localStorage.setItem('favorites', JSON.stringify([favorite]));
      target.classList.add('button-danger');
      target.textContent = 'Удалить';
    }
  }
};

const compileTemplate = async function() {
  const posts = await ApiService.fetchPosts();
  const source = document.getElementById("post-template").innerHTML;
  const template = Template.compile(source);
  return template(posts);
};

export {PostsComponent};

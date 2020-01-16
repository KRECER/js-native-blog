import {PostsComponent} from "./posts.component";
import {CreateComponent} from "./create.component";
import {FavoriteComponent} from "./favorite.component";
import {Preloader} from "./preloader.component";

class NavigationFactory {
  static create(name) {
    let instance = {};

    switch(name) {
      case 'posts':
        instance = new PostsComponent('posts', {preloader: new Preloader('loader')});
        instance.name = 'posts';
        break;
      case 'create':
        instance = new CreateComponent('create');
        instance.name = 'create';
        break;
      case 'favorite':
        instance = new FavoriteComponent('favorite', {preloader: new Preloader('loader')});
        instance.name = 'favorite';
        break;
    }
    return instance;
  }
}

export {NavigationFactory};

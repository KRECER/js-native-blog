import {PostsComponent} from "./posts.component";
import {CreateComponent} from "./create.component";
import {FavoriteComponent} from "./favorite.component";

class Factory {
  static create(name) {
    let instance = {};

    switch(name) {
      case 'posts':
        instance = new PostsComponent('posts');
        break;
      case 'create':
        instance = new CreateComponent('create');
        break;
      case 'favorite':
        instance = new FavoriteComponent('favorite');
        break;
    }
    return instance;
  }
}

export {Factory};

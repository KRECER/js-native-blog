import {Component} from "../core/component";
import {ApiService} from "../services/api.service";
import {Template} from "../core/template";

class PostsComponent extends Component {
  constructor(id) {
    super(id);
  }

  async onShow() {
    const posts = await ApiService.fetchPosts();
    const source = document.getElementById("post-template").innerHTML;
    const template = Template.compile(source);
    this.$el.innerHTML = template(posts);
  }
}

export {PostsComponent};

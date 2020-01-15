import axios from 'axios';

const server = axios.create({
  baseURL: 'https://blog-js-8fb5b.firebaseio.com/'
});

class ApiService {
  static createPost(post) {
    server.post('/posts.json', JSON.stringify(post));
  }

  static async fetchPosts() {
    const response = await server.get('/posts.json');
    const posts = [];

    for (let key in response.data) {
      response.data[key].id = key;
      posts.push(response.data[key]);
    }

    return posts;
  }
}

export {ApiService};

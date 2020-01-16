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
      posts.push(response.data[key])

      if(localStorage.favorites) {
        response.data[key].favorite = localStorage.favorites.includes(response.data[key].id);
      }
    }

    return posts;
  }

  static async fetchPostById(id) {
    const response = await server.get(`/posts/${id}.json`);
    return response.data;
  }
}

export {ApiService};

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

export default {
  refs: {
    List: document.querySelector('#postList'),
    Form: document.querySelector('#formAddPost'),
  },

  // getPosts() {
  //   return axios.get('/posts').then(res => res.data);
  // },
  async getPosts() {
    try {
      const res = await axios.get('/posts');
      return res.data;
    } catch (err) {
      throw err;
    }
  },

  // deletePost(postId) {
  //   const url = `/posts/${postId}`;
  //   return axios.delete(url).then(res => res.data);
  // },
  async deletePost(postId) {
    const url = `/posts/${postId}`;
    try {
      const res = await axios.delete(url);
      return res.data;
    } catch (err) {
      throw err;
    }
  },

  // addPost(author, title) {
  //   return axios
  //     .post('/posts', { author: author, title: title })
  //     .then(res => res.data);
  // },
  async addPost(author1, title1) {
    try {
      const res = await axios.post('/posts', {
        author: author1,
        title: title1,
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  },

  // updatePost(postId, update) {
  //   const url = `/posts/${postId}`;
  //   return axios.patch(url, update).then(res => res.data);
  // },
  async updatePost(postId, update) {
    const url = `/posts/${postId}`;

    try {
      const res = await axios.patch(url, update);
      return res.data;
    } catch (err) {
      throw err;
    }
  },
};

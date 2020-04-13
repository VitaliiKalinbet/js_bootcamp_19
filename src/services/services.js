const baseUrl = 'http://localhost:5000/posts';

export default {
  refs: {
    List: document.querySelector('#postList'),
  },
  getPosts() {
    return fetch(baseUrl).then(res => res.json());
  },
  deletePost(postId) {
    const url = `/${postId}`;
    const options = {
      method: 'DELETE',
    };

    return fetch(baseUrl + url, options).then(res => res.json());
  },
  addPost(author, title) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, title }),
    };
  },
};

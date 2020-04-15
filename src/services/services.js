const baseUrl = 'http://localhost:5000/posts';

export default {
  refs: {
    List: document.querySelector('#postList'),
    Form: document.querySelector('#formAddPost'),
  },
  // getPosts() {
  //   return fetch(baseUrl).then(res => res.json());
  // },
  async getPosts() {
    try {
      const res = await fetch(baseUrl);
      const parseRes = await res.json();
      return parseRes;
    } catch (err) {
      // console.warn(err);
      throw err;
      // throw new Error('не удалось получить посты или распарсить их');
    }
  },

  // deletePost(postId) {
  //   const url = `/${postId}`;
  //   const options = {
  //     method: 'DELETE',
  //   };
  //   return fetch(baseUrl + url, options).then(res => res.json());
  // },
  async deletePost(postId) {
    const url = `/${postId}`;
    const options = {
      method: 'DELETE',
    };

    try {
      const res = await fetch(baseUrl + url, options);
      const parseRes = await res.json();
      return parseRes;
    } catch (err) {
      throw err;
    }
  },

  // addPost(author, title) {
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ author, title }),
  //   };
  //   return fetch(baseUrl, options).then(res => res.json());
  // },
  async addPost(author, title) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, title }),
    };

    try {
      const res = await fetch(baseUrl, options);
      const parseRes = await res.json();
      return parseRes;
    } catch (err) {
      throw err;
    }
  },

  updatePost(postId, update) {
    const url = `/${postId}`;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
    };

    return fetch(baseUrl + url, options)
      .then(res => res.json())
      .catch(err => {
        throw err;
      });
  },
};

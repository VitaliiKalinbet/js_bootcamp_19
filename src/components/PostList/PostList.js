import services from '../../services/services';
import postListItem from '../../templates/postListItem.hbs';
import './PostList.css';

async function getPostsAndAddInDomList() {
  try {
    const res = await services.getPosts();
    const list = res.reduce((acc, el) => acc + postListItem(el), '');
    services.refs.List.classList.add('PostList-list');
    services.refs.List.insertAdjacentHTML('beforeend', list);
  } catch (err) {
    console.warn(err);
  }
}
getPostsAndAddInDomList();

// function getPostsAndAddInDomList() {
//   services
//     .getPosts()
//     .then(res => {
//       const list = res.reduce((acc, el) => acc + postListItem(el), '');
//       // const list = res.map(el => postListItem(el)).join('');
//       services.refs.List.insertAdjacentHTML('beforeend', list);
//     })
//     .catch(err => console.warn(err));
// }
// getPostsAndAddInDomList();

// (function getPostsAndAddInDomList() {
//   services.getPosts().then(res => {
//     console.table(res);
//     const list = res.reduce((acc, el) => acc + postListItem(el), '');

//     // const list = res.map(el => postListItem(el)).join('');

//     services.refs.List.insertAdjacentHTML('beforeend', list);
//   });
// })();

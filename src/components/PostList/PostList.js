import services from '../../services/services';
import postListItem from '../../templates/postListItem.hbs';

function getPostsAndAddInDomList() {
  services.getPosts().then(res => {
    const list = res.reduce((acc, el) => acc + postListItem(el), '');

    // const list = res.map(el => postListItem(el)).join('');

    services.refs.List.insertAdjacentHTML('beforeend', list);
  });
}

getPostsAndAddInDomList();

// (function getPostsAndAddInDomList() {
//   services.getPosts().then(res => {
//     console.table(res);
//     const list = res.reduce((acc, el) => acc + postListItem(el), '');

//     // const list = res.map(el => postListItem(el)).join('');

//     services.refs.List.insertAdjacentHTML('beforeend', list);
//   });
// })();

import services from '../../services/services';

async function deletePostFunction(e) {
  if (e.target.nodeName === 'BUTTON' && e.target.dataset.action === 'delete') {
    const id = e.target.dataset.id;

    try {
      const res = await services.deletePost(id);
      e.target.closest('li').remove();
    } catch (err) {
      console.warn(err);
    }
  }
}

// function deletePostFunction(e) {
//   if (e.target.nodeName === 'BUTTON') {
//     const id = e.target.dataset.id;
//     services
//       .deletePost(id)
//       .then(() => {
//         e.target.closest('li').remove();
//       })
//       .catch(err => console.warn(err));
//   }
// }

services.refs.List.addEventListener('click', deletePostFunction);

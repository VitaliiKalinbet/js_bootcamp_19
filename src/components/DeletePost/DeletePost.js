import services from '../../services/services';

function deletePostFunction(e) {
  if (e.target.nodeName === 'BUTTON') {
    const id = e.target.dataset.id;

    services
      .deletePost(id)
      .then(() => {
        e.target.closest('li').remove();
      })
      .catch(err => console.warn(err));
  }
}

services.refs.List.addEventListener('click', deletePostFunction);

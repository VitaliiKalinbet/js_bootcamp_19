import services from '../../services/services';
import './form.css';
import postListItem from '../../templates/postListItem.hbs';

function createForm() {
  const inputAuthor = document.createElement('input');
  const inputTitle = document.createElement('input');
  const buttonAddPost = document.createElement('button');
  inputAuthor.setAttribute('type', 'text');
  inputTitle.setAttribute('type', 'text');
  inputAuthor.setAttribute('required', 'true');
  inputTitle.setAttribute('required', 'true');
  buttonAddPost.setAttribute('type', 'submit');
  buttonAddPost.setAttribute('data-action', 'create');
  inputAuthor.setAttribute('placeholder', 'author');
  inputTitle.setAttribute('placeholder', 'title');
  buttonAddPost.textContent = 'Create post';
  services.refs.Form.append(inputAuthor, inputTitle, buttonAddPost);
  services.refs.Form.classList.add('FormAddPost-form');
}

createForm();

async function addPost(e) {
  e.preventDefault();
  if (
    e.target.elements[2].tagName === 'BUTTON' &&
    e.target.elements[2].dataset.action === 'create'
  ) {
    if (e.target.elements[3]) return;

    const inputAuthor = document.querySelector('input[placeholder="author"]');
    const inputTitle = document.querySelector('input[placeholder="title"]');

    try {
      const res = await services.addPost(inputAuthor.value, inputTitle.value);
      const item = postListItem(res);
      services.refs.List.insertAdjacentHTML('beforeend', item);
    } catch (err) {
      console.warn(err);
    }

    inputAuthor.value = '';
    inputTitle.value = '';
  }
}

// function addPost(e) {
//   e.preventDefault();
//   const inputAuthor = document.querySelector('input[placeholder="author"]');
//   const inputTitle = document.querySelector('input[placeholder="title"]');
//   services
//     .addPost(inputAuthor.value, inputTitle.value)
//     .then(res => {
//       const item = postListItem(res);
//       services.refs.List.insertAdjacentHTML('beforeend', item);
//     })
//     .catch(err => console.warn(err));
//   inputAuthor.value = '';
//   inputTitle.value = '';
// }

services.refs.Form.addEventListener('submit', addPost);

import services from '../../services/services';

function updatePost(e) {
  if (e.target.nodeName === 'BUTTON' && e.target.dataset.action === 'update') {
    // 1. При нажатии на кнопку update поста добавить кнопку Update post в форму (и создать ей дата атрибут c id поста который мы обновляем)
    const buttonUpdate = document.createElement('button');
    const updatePostId = e.target.dataset.id;
    buttonUpdate.setAttribute('data-id', updatePostId);
    buttonUpdate.textContent = 'Update post';
    buttonUpdate.setAttribute('data-action', 'update');
    services.refs.Form.appendChild(buttonUpdate);

    // 2. Сделать кнопку Create post не активной
    services.refs.Form.querySelector(
      'button[data-action="create"]',
    ).setAttribute('disabled', true);

    // 3. Значение h4 поместить в inputAuthor, значение p поместить в inpuTitle
    // 3.1 Получить значение textContent из h4 и p
    const updatePostLiChildren = e.target.closest('li').children;
    const authorH4 = updatePostLiChildren[0];
    const titleP = updatePostLiChildren[1];
    // 3.1 Получить доступ к инпутам формы
    const formChildren = services.refs.Form.children;
    const inputAuthor = formChildren[0];
    const inputTitle = formChildren[1];
    // 3.3 Значение h4 поместить в inputAuthor, значение p поместить в inpuTitle
    inputAuthor.value = authorH4.textContent;
    inputTitle.value = titleP.textContent;

    services.refs.Form.querySelector(
      'button[data-action="update"]',
    ).addEventListener('click', patchUpdatePost);
  }
}

services.refs.List.addEventListener('click', updatePost);

function patchUpdatePost(e) {
  // 1. Получить доступ к id
  const id = e.target.dataset.id;
  // 2. Получить досту к инутам формы и вязть из ни значения чтобы сформировать объект update
  const authorValue = document.querySelector('input[placeholder="author"]')
    .value;
  const titleValue = document.querySelector('input[placeholder="title"]').value;
  const update = { author: authorValue, title: titleValue };

  services.updatePost(id, update).then(res => {
    findCurrentPostAndUpdate(res.id, res.author, res.title);
  });
}

function findCurrentPostAndUpdate(id, newAuthor, newTitle) {
  // 1. Получит параметрами id, новое значени автора, новое значение title
  // 2. Найдет нужную li, обратиться к ее элементам h4 и p и вменит им новые textContent
  const liChildren = document.querySelector(`li[data-id="${id}"]`).children;
  const authorH4 = liChildren[0];
  const titleP = liChildren[1];
  authorH4.textContent = newAuthor;
  titleP.textContent = newTitle;
  // 3. Очистить инпуты формы
  services.refs.Form.reset();
  // 4. удалит кнопку update post из формы и разблокрировать кнопку create
  services.refs.Form.querySelector('button[data-action="update"]').remove();
  services.refs.Form.querySelector(
    'button[data-action="create"]',
  ).removeAttribute('disabled');
}

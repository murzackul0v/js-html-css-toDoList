document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form');
  const messagesContainer = document.querySelector('.messages');
  const sortingSelect = document.querySelector('.sorting select');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = document.querySelector('.name input');
    const messageTextarea = document.querySelector('.message textarea');
    const selectedSorting = sortingSelect.value;

    createCard(nameInput.value, messageTextarea.value, selectedSorting);

    nameInput.value = '';
    messageTextarea.value = '';
  });

  function createCard(name, message, sorting) {
    const card = document.createElement('div');
    card.className = 'content-text';
    const textContainer = document.createElement('div');
    textContainer.className = 'text';
    const nameText = document.createElement('p');
    nameText.className = 'name-text';
    nameText.textContent = name;
    const messageText = document.createElement('p');
    messageText.className = 'message-text';
    messageText.textContent = message;
    const userBox = document.createElement('div');
    userBox.className = 'user-box';
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="bi bi-pencil-square"></i>';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="bi bi-trash3"></i>';

    editButton.addEventListener('click', function () {
      // Реализуйте функцию редактирования
      console.log('Edit button clicked');
    });

    deleteButton.addEventListener('click', function () {
      card.remove();
    });

    textContainer.appendChild(nameText);
    textContainer.appendChild(messageText);
    userBox.appendChild(editButton);
    userBox.appendChild(deleteButton);
    card.appendChild(textContainer);
    card.appendChild(userBox);
    messagesContainer.appendChild(card);

    applySortingStyle(card, sorting);
  }

  function applySortingStyle(card, sorting) {
    card.classList.remove('work', 'study', 'everyday', 'important');

    if (sorting === 'Работа') {
      card.classList.add('work');
    } else if (sorting === 'Учеба') {
      card.classList.add('study');
    } else if (sorting === 'Повседневные') {
      card.classList.add('everyday');
    } else if (sorting === 'Важные') {
      card.classList.add('important');
    }
  }
});

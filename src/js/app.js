import Close from '../img/close.png'

const btn = document.getElementById('btn');
const wrapper = document.getElementById('main');
btn.addEventListener('click', () => {
  btn.classList.add('hideBtn');
  btn.classList.remove('activeBtn');

  const chat = document.createElement('div');
  chat.className = 'chat-wrapper activeChat';

  chat.innerHTML = `<div class="chat-header">
      <span class="title">Напишите нам</span>
      <img src="${Close}" id="close" class="close" alt="close">
    </div>
    <div class="form_holder">
      <form action="">
        <textarea class="textarea" rows="10"></textarea>
        <input class="send" type="submit">
      </form>
    </div>`;

  wrapper.appendChild(chat);

  const closeBtn = document.getElementById('close');

  closeBtn.addEventListener('click', () => {
    closeBtn.parentElement.parentElement.classList.add('hideChat');

    setTimeout(() => {
      closeBtn.parentElement.parentElement.remove();
    }, 1000);

    btn.classList.remove('hideBtn');
    btn.classList.add('activeBtn');
  });
});

import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

const loader = (el) => {
  el.textContent = '';

  loadInterval = setInterval(() => {
    el.textContent += '.';
    if (el.textContent === '....') {
      el.textContent = '';
    }
  }, 300);
};

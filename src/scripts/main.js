'use strict';

const message = document.getElementsByClassName('hidden-message')[0];
const errorMessage = document.getElementsByClassName('error-message')[0];
const logo = document.getElementsByClassName('logo')[0];
const promise1 = new Promise(iDontKnow);
const promise2 = new Promise(iDontKnow);

function iDontKnow(resolve, reject) {
  logo.addEventListener('click', () => {
    message.classList.add('message');
    resolve('Promise was resolved!');
  });

  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
}

promise1
  .then((result) => {
    message.innerHTML = result;
  })
  .catch((result) => {
    errorMessage.innerHTML = result;
  });

promise2
  .then((result) => {
    message.innerHTML = result;
  })
  .catch((result) => {
    errorMessage.innerHTML = result;
  });

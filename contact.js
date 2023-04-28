const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const lastNameInput = document.querySelector('#last-name')

form.addEventListener('submit', async (e) => {
  e.preventDefault();


  if (nameInput.value.trim() === '') {
    alert('Por favor, preencha seu nome.');
    nameInput.focus();
    return false;
  }

  if (lastNameInput.value.trim() === '') {
    alert('Por favor, preencha seu último nome.');
    lastNameInput.focus();
    return false;
  }

  if (emailInput.value.trim() === '') {
    alert('Por favor, preencha seu endereço de e-mail.');
    emailInput.focus();
    return false;
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    alert('Por favor, digite um endereço de e-mail válido.');
    emailInput.focus();
    return false;
  }

  if (messageInput.value.trim() === '') {
    alert('Por favor, escreva uma mensagem.');
    messageInput.focus();
    return false;
  }


  const response = await fetch('data.json');
  const data = await response.json();
  const message = `${data.message}!`;
  alert(message);
  form.submit();
  form.reset();
});

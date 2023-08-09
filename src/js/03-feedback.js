import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input');
const textareaForm = document.querySelector('textarea');

const LOCAL_KEY = 'feedback-form-state';
let emailInput = form.elements.email.value;
let messageText = form.elements.message.value;
form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  let values = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(LOCAL_KEY, JSON.stringify(values));
}

function updateForm() {
  const savedValues = localStorage.getItem(LOCAL_KEY);
  const parsedValues = JSON.parse(savedValues);
  //   console.log(parsedValues.email);

  if (parsedValues) {
    form.elements.email.value = parsedValues.email;
    form.elements.message.value = parsedValues.message;
  }
}
updateForm();

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  let values = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(values);
  localStorage.removeItem(LOCAL_KEY);
  form.reset();
}

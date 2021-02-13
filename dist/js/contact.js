const form = document.getElementById('form');
const username = document.getElementById('username');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs

  const usernameValue = username.value.trim();
  const subjectValue = subject.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (usernameValue === '') {
    // show error
    // add error class
    setErrorFor(username, 'This field cannot be empty');
  } else {
    // add success class
    setSuccessFor(username);
  }

  if (subjectValue === '') {
    setErrorFor(subject, 'This field cannot be empty');
  } else {
    setSuccessFor(subject);
  }

  if (emailValue === '') {
    setErrorFor(email, 'This field cannot be empty');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email format is not valid');
  } else {
    setSuccessFor(email);
  }

  if (messageValue === '') {
    setErrorFor(message, 'This field cannot be empty');
  } else {
    setSuccessFor(message);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement; // .form-control
  formControl.className = 'form-control success'; // add error class
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

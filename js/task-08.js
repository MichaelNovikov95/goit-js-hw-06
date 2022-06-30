const form = document.querySelector('.login-form');

function handleSubmit (event) {
  event.preventDefault();

  const informList = {
    email : '',
    password : '',
  }

  const {
    elements : {email, password}
  } = event.currentTarget;

  if (email.value === '' && password.value === '') {
    return alert ('Проверьте, все ли поля заполнены!');
  } else {
    informList.email = email.value;
    informList.password = password.value;
  }

  console.log(informList);
  event.currentTarget.reset();
};

form.addEventListener('submit', handleSubmit);
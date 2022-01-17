// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('identity-card').addEventListener('blur', validateidentitycard);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateidentitycard(){
  const identityCard = document.getElementById('identity-card');
  const re = /^[0-9]{9,9}$/;

  if(!re.test(identityCard.value)){
    identityCard.classList.add('is-invalid');
  } else {
    identityCard.classList.remove('is-invalid');
  }
}
function validateEmail(){
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.com$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }

}
function validatePhone(){
  const phone = document.getElementById('phone');
  const re = /^0([0-9]{2})-([0-9]{3})-([0-9]{4})$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}


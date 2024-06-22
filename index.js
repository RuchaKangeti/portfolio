document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var valid = true;
  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var messageError = document.getElementById('messageError');
  
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  
  if (name.trim() === '') {
      nameError.textContent = 'Name is required.';
      valid = false;
  }
  
  if (email.trim() === '') {
      emailError.textContent = 'Email is required.';
      valid = false;
  } else if (!validateEmail(email)) {
      emailError.textContent = 'Invalid email format.';
      valid = false;
  }
  
  if (message.trim() === '') {
      messageError.textContent = 'Message is required.';
      valid = false;
  }
  
  if (valid) {
      alert('Form submitted successfully!');
      // Here you can add the code to actually submit the form data
      // For example, using AJAX to send the data to the server
  }
});

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
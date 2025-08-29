const correctPassword = '1234';
function checkPassword() {
  const inputPassword = document.getElementById('password').value;
  if (inputPassword === correctPassword) {
    window.location="https://masumbillah6778bd.blogspot.com/2025/08/password-3.html";
    }
  else{
    document.getElementById('error').innerText = 'Incorrect password. Please try again.';
    }
  }

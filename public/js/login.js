const handleLogin = (event) => {
  event.preventDefault();
  alert('Login successful');
};

document.getElementById('login-form').addEventListener('submit', handleLogin);
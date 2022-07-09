const handleLogin = async (event) => {
  event.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: { 'Content-Type': 'application/json' },
  });


  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Incorrect email and password combination');
  }
};

document.getElementById('login-form').addEventListener('submit', handleLogin);
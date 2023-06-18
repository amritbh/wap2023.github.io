const API_URL = 'http://localhost:3300';
window.onload=function(){
 
     //When user clicks Login
     document.getElementById('login').addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        try {
          const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
          });
          console.log(response);
          if (response.ok) {
            const data = await response.json();
            const token = data.token; 
            window.location.href = 'inside_page.html';
            sessionStorage.setItem('authToken', JSON.stringify(token));
          } else {
            const errorMessage = document.getElementById('login-error');
            errorMessage.textContent = 'Invalid username or password';
            console.error('Failed to login:', response.status);
          }
        } catch (error) {
          console.error('Failed to login:', error);
        }
        });
  
}
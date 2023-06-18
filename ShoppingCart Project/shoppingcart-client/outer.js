const API_URL = 'http://localhost:3300';
//since this code is running in a web browser, the `window.onload` function is used to ensure that the code runs after the page has loaded.
window.onload=function(){
 
     //When user clicks Login
     document.getElementById('login').addEventListener('submit', async function(event) {
        event.preventDefault();// prevents the default page refresh behavior  
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        //function then sends a `POST` request to the server with the `username` and `password` 
        try {
          //The `fetch()` function is used to make the request, and the response is stored in the `response` variable.
          const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
          });
          console.log(response);
          if (response.ok) {
            // function retrieves the token from the response body, sets it in the session storage under the key `authToken`, 
            //and redirects the user to the "inside_page.html" page. 
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
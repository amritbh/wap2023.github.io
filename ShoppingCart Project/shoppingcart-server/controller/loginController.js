const users = require('../model/users');
const tokenObjs = [];
exports.authenticate = (req, res, next) => {
    const { username, password } = req.body;//getting the `username` and `password` values from the request body
    const user = users.find((user) => user.username === username && user.password === password); //searches the `users` array for a user object that has a matching `username` and `password`

    if (user) {//If a matching user is found, the function generates a token ID
        const currentTime = new Date();
        const expirationTime = new Date(currentTime.getTime() + 10 * 60 * 1000); //an expiration time that is set to 10 minutes in the future. 
        //A new token object is created with the token ID, expiration time, and username, and then added to the `tokenObjs` array.
        const token = {
            tokenID:`${currentTime.toISOString()}_${username}`,
            expires_at:expirationTime,
            username:username
        };
        tokenObjs.push(token);
        //Finally, the function sends a HTTP 201 (Created) response to the client with the token object in the response body.
        res.status(201).json({ token });
    } else {
        //If a user with the provided `username` and `password` is not found in the `users` array, 
        //the function sends a HTTP 401 (Unauthorized) response 
        res.status(401).json({ error: 'Invalid username or password' });
    }

}
exports.tokenObjs = tokenObjs;

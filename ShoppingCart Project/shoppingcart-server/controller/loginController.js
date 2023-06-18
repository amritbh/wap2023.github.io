const users = require('../model/users');
const tokenObjs = [];
exports.authenticate = (req, res, next) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        const currentTime = new Date();
        const expirationTime = new Date(currentTime.getTime() + 10 * 60 * 1000); 
        const token = {
            tokenID:`${currentTime.toISOString()}_${username}`,
            expires_at:expirationTime,
            username:username
        };
        tokenObjs.push(token);
        res.status(201).json({ token });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }

}
exports.tokenObjs = tokenObjs;

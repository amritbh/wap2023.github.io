const loginController = require('../controller/loginController');
const tokenObjs = loginController.tokenObjs;

exports.authenticateTokens = function authenticateToken(request, response, next) {
  try {
    const currentTimestamp = new Date().getTime();
    const tokenID = request.header.token; 
    const tokenObj = tokenObjs.find(token => token.tokenID === tokenID);
    if (!tokenObj) {
      throw new Error('Invalid request!');
    }
    if (tokenObj.expires_at < currentTimestamp) {
        let removeIndex=tokenObjs.findIndex(tokenObj);
        tokenObjs.splice(removeIndex, 1);
        throw new Error('Token has expired!');  
    }
  next();
  } catch (error) {
    response.status(401).json({
      error: error.message
    });
  }
}

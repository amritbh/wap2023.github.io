const tokens=require('./loginController').tokenObjs;

exports.logOut=function(request,response){
    const tokenId=request.headers['tokenId'];
    const tokenIndex=tokens.findIndex(token=>token.tokenId===tokenId);
    tokens.splice(tokenIndex, 1); 
    response.status(200).json({
        message: 'Successfully logged out'
    });    
}
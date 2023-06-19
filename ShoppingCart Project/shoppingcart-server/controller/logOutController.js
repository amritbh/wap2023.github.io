const tokens=require('./loginController').tokenObjs;
//It receives the `request` and `response` parameters, and starts by extracting the `tokenId` from the request headers.
exports.logOut=function(request,response){
    const tokenId=request.headers['tokenId'];
    //searches the `tokenObjs` array for a token object that has a matching `tokenId` value.
    const tokenIndex=tokens.findIndex(token=>token.tokenId===tokenId);
    tokens.splice(tokenIndex, 1); //If a matching token is found, it is removed from the array using the `splice()` method.
    response.status(200).json({
        message: 'Successfully logged out'
    });    
}
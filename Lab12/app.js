const express = require('express');
const app = express();
const port = 3000;

//serve static files 
app.use(express.static('public'));

//setup  routes
app.get('/', (req, res)=>{
res.sendFile(__dirname + '/public/index.html');
});

//users router 
const usersRouter = express.Router();
app.use('/users', usersRouter);

usersRouter.get('/',(req, res)=>{
//res.send('This is the users page');
res.sendFile(__dirname + '/public/users.html');
});

usersRouter.post('/', (req, res)=>{
    res.send('user posted successfully');
})

//products router 
const productsRouter = express.Router();
app.use('/products', productsRouter);

productsRouter.get('/', (req, res) =>{
res.send('This is the product page')
});

productsRouter.post('/', (req, res)=>{
    res.post('Product posted successfully');
});

//404 page 
app.use((req, res, next)=>{
    res.status(404).sendFile(__dirname + '/public/404.html');
});

//error handling 
app.use((err, req, res, next)=>{
    console.err(err);
   // res.status(500).send('Internal Server Down!');
    res.status(500).send('Internal Server Down!');
});
//start the server 
app.listen(3000, ()=>{
    console.log('server is running on port 30000')
})
/**
 * <!-- Instructions
1. Create a npm project and install Express.js (Nodemon if you want)
2. Change your Express.js app which serves HTML files (of your choice with your content) for “/”, “/users” and “/products”.
3. For “/users” and “/products”, provides GET and POST requests handling (of your choice with your content) in different routers. 
4. Add some static (.js or .css) files to your project that should be required by at least one of your HTML files.
5. Customize your 404 page
6. Provide your own error handling -->
 */
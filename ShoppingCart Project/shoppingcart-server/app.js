const express = require('express');
const bodyParser=require('body-parser');
const loginRouter=require('./routes/loginRouter');
const productRouter=require('./routes/productRouter');
const logOutRouter=require('./routes/logOutRouter');
const cors=require('cors');
const authenticationMiddleware=require('./middleware/authentication');
const PORT=3300;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//Routes

//Login Route
app.use('/login',loginRouter);

//Logout Route
app.use('/logOut',logOutRouter);

//Route for Products
app.use('/products',productRouter);

app.listen(PORT, ()=>console.log(`listen on ${PORT}`));

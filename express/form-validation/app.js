// imports
const express = require('express');
const morgan = require('morgan');
const app = express();
const userModel = require('./models/user')
const dbConnection = require('./config/db')


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

// setup to render ejs files
app.set('view engine', 'ejs');


// home page
app.get("/", (req, res)=>{
    res.render('index');
})

// random routes
app.get('/about', (req, res)=>{
    res.send("This is aboutrr page")
})
app.get('/profile', (req, res)=>{
    res.send("This is profile page")
})


// route to create user and save its data
app.get('/register', (req, res)=>{
    res.render('register');
})
app.post('/register', async (req, res)=>{
    const {username , email, password} = req.body;
   await userModel.create({
        username : username,
        email : email,
        password : password
    })
    res.send('Thankyou')
})

// read users data fron db
app.get('/get-users', (req, res)=>{
    userModel.find().then((users)=>{
        res.send(users);
    })
})

app.listen(3000);
// custom 3rd party Middleware for perticular route
const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'))

app.set("view engine", 'ejs')
app.get('/', (req, res)=>{
    res.render('index');
})
app.get('/about', (req, res, next)=>{
    console.log("this is middleware");
    const a = 2;
    const b = 3;
    console.log(a+b);
    next()
}, (req, res)=>{
    res.send('This is about page');
})
app.get('/profile', (req, res)=>{
    res.send('This is profile page');
})
app.get('/home', (req, res)=>{
    res.send('This is home page');
})
app.get('/products', (req, res)=>{
    res.send('This is product page');
})

app.listen(3000);
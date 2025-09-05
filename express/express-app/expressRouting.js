// conditional routing using express

const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World');
})
app.get('/about', (req, res)=>{
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
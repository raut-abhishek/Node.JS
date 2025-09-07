const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    res.render('index');
})
app.get('/about', (req, res)=>{
    res.send("This is aboutrr page")
})
app.get('/profile', (req, res)=>{
    res.send("This is profile page")
})

app.post('/get-form-deta',(req, res)=>{
     console.log(req.body);
     res.send('Form submitted successfully')
})

app.listen(3000);
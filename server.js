let express = require('express');
let bodyparser = require('body-parser');

const app = express();

let postRoute = require('./route/postRoute');
let authRoute = require('./route/authRoute');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get('/api', (req,res) => {
    res.json({
        message:'Welcome to the API'
    });
});

app.use('/api/posts', postRoute);
app.use('/api/auth', authRoute);

app.listen(5000, ()=> console.log('Server started on port 5000'));
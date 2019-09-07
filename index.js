const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send({
        hi: 'there',
        name:'Yonatan'});
});

app.listen(5000);
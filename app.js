const express = require('express');

const app = express();




app.get('/', (req, res)=> {
	res.send('这是首页');
});

app.get('/a', (req, res)=> {
	res.send('a发生时  这是A 页面');
});

app.get('/b', (req, res)=> {
	res.send('b 这是B 页面的发顺丰都是');
});

app.get('/c', (req, res)=> {
	res.send('vvvvvvvvc');
});

app.get('/d', (req, res)=> {
	res.send('d');
});

app.get('/f', (req, res)=> {
	res.send('f');
});





app.listen(3333);
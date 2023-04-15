const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
	res.send('hello from my first ever server');
});
app.get('/data', (req, res) => {
	res.send('More data comming soon');
});
app.listen(port, () => {
	console.log(` my first sercver in running on port:${port}`);
});

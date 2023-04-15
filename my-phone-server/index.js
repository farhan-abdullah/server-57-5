const express = require('express');
const phones = require('./phones.json');
var cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.get('/', (req, res) => {
	//aita ektra api
	res.send('My phone information comming soon In sha Allah');
});
app.get('/phones', (req, res) => {
	res.send(phones);
});
app.get('/phones/:id', (req, res) => {
	const hey = parseInt(req.params.id);
	console.log('i need data for id:', hey);
	const phone = phones.find((phone) => phone.id == hey) || {};
	res.send(phone);
});

app.get('/*', (req, res) => {
	res.send('404');
});
app.listen(port, () => {
	console.log(` My phone server is running on port ${port}`);
});

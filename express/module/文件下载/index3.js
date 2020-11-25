const express = require('express')
const app = express()

app.get('/download', function (req, res, next) {
	res.download('./upload/fuck.txt')
})

app.listen(8000, (err) => {
	if (err) {
		throw new Error(err)
	}
	console.log('*** server started ***')
})

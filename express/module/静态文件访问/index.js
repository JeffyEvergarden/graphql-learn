const express = require('express')
const app = express()

// 处理静态文件资源 访问部署目录下的page
app.use('/file', express.static('page'))
// 比如说 localhost:8000/fuck.txt
// app.get('/', (req, res) => res.end('index'))

app.listen(8000, (err) => {
	if (err) {
		throw new Error(err)
	}
	console.log('*** server started ***')
})

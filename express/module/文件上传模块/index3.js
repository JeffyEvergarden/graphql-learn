const express = require('express')
const app = express()

// 处理静态文件资源
app.use('/file', express.static('page'))

/***********************************************/
//上传文件 安装multer
// 安装文件用的
const multer = require('multer')

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads')
	},
	filename: function (req, file, cb) {
		cb(null,Date.now() + '-' + file.originalname)
	}
})
const upload = multer({ storage }) // 上传文件放置路径
const propsname = upload.single('uploadFile') //uploadFile 命名要为form表单对应的属性

app.post('/uploadfile', propsname, function (req, res, next) {
	console.log(req.file)
	console.log(req.body)
	// req.file 是 `avatar` 文件的信息
	// req.body 将具有文本域数据，如果存在的话
})


/***********************************************/

// app.get('/', (req, res) => res.end('index'))

app.listen(8000, (err) => {
	if (err) {
		throw new Error(err)
	}
	console.log('*** server started ***')
})

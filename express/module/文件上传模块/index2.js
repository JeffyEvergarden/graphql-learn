// 多文件上传

const express = require('express')
const app = express()
const fs = require('file')

// 处理静态文件资源
app.use('/file', express.static('page'))

/***********************************************/
//上传文件 安装multer
// 安装文件用的
const multer = require('multer')
const upload = multer({ dest: 'uploads/' }) // 上传文件放置路径
const namespace = upload.single('uploadFile') //uploadFile 命名要为form表单对应的属性
/* <input type="file" name="uploadFile" /> */
const namespace2 = upload.array('uploadFiles', 3)
/* <input type="file" name="uploadFile2" /> */

// 多文件上传
app.post('/uploadfiles', namespace2, function (req, res, next) {
	console.log(req.files)
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

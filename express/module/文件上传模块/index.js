// 单文件上传

const express = require('express')
const app = express()

/***********************************************/
//上传文件 安装multer
// 安装文件用的
const multer = require('multer')
const upload = multer({ dest: 'uploads/' }) // 上传文件放置路径
const namespace = upload.single('uploadFile') //uploadFile 命名要为form表单对应的属性
/* <input type="file" name="uploadFile" /> */

// 单文件
app.post('/uploadfile', namespace, function (req, res, next) {
	console.log(req.file)
	console.log(req.body)
	// req.file 是 `avatar` 文件的信息
  // req.body 将具有文本域数据，如果存在的话
  // {
  //   fieldname: 'uploadFile',
  //   originalname: 'fake.txt',
  //   encoding: '7bit',
  //   mimetype: 'text/plain',
  //   destination: 'uploads/',
  //   filename: '91f9090257cbec475c11e9b161beb1af',
  //   path: 'uploads\\91f9090257cbec475c11e9b161beb1af',
  //   size: 0
  // }
})

// app.get('/', (req, res) => res.end('index'))

app.listen(8000, (err) => {
	if (err) {
		throw new Error(err)
	}
	console.log('*** server started ***')
})

var fs = require('fs');
var express = require('express');
var multer  = require('multer');
var path = require('path');

var app = express();
// var upload = multer({ dest: 'upload/' });

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

function createNewExcel(dataFilePath) {
  var xlsx = require('node-xlsx').default;
  var fs = require('fs');
  var path = require('path');
  const distDataFilePath = path.join('upload', path.basename(dataFilePath, '.xlsx') + '韵达发中的值ERP没有的.xlsx');
  const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(dataFilePath));

  // TODO 去重优化
  var data1 = changeToSimpleArray(workSheetsFromBuffer[1]);
  var data2 = changeToSimpleArray(workSheetsFromBuffer[0]);

  var output = [];

  // data1中的值data2没有
  for(var i = 0; i < data1.length; i++) {
    if (data2.indexOf(data1[i]) >= 0) {
      // console.log(data1[i]);
    } else {
      var a = [];
      a.push(data1[i]);
      output.push(a);
    }
  }

  function changeToSimpleArray(data) {
    var result = [];
    for(var i = data.data.length - 1; i >= 0; i--){
      result.push(data.data[i][0] + '');
    }
    return result;
  }

  var buffer = xlsx.build([{name: "mySheetName", data: output}]); // Returns a buffer
  fs.writeFileSync(distDataFilePath, buffer, {'flag':'w'}); // 如果文件存在，覆盖
}

// 单图上传
app.post('/upload', upload.single('logo'), function(req, res, next){
    var file = req.file;
    var filepath = path.join(__dirname, 'upload', file.originalname);
    console.log(filepath);
    createNewExcel(filepath);
    console.log(file);

    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);
    const distDataFilePath = path.join('upload', path.basename(filepath, '.xlsx') + '韵达发中的值ERP没有的.xlsx');
    res.download(distDataFilePath)
    // res.send({ret_code: '0'});
});

app.get('/', function(req, res, next){
    var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    res.send(form);
});

app.listen(7003);
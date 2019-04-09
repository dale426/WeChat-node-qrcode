var express = require('express')
var router = express.Router()
var fs = require('fs');

var createQrCode = require('../utils/qrcode.js');


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
})
// define the about route
router.get('/wechat-code', function (req, res) {
    res.render('home')
})


router.get('/qrcode', function (req, res) {
    var params = req.query || {}
    try {
        createQrCode.create(params).then(response => {
            response.pipe(res)


            /*            // 创建一个可写流文件
                               var fileWriter=fs.createWriteStream('05.png');
                               // response 为一个可读流
                               // 将可读流插入到可写流管道中
                               response.pipe(fileWriter) */



            /*             response.on('data', function(resData) {
                            fileWriter.write(resData, function(err) {
                                console.log('err', err);
                            })
                        }).on('end', function(){
            
                        }) */


        });
    } catch (e) {
        console.log('e', e);

    }
})


module.exports = router
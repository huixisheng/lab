var fs = require('fs'),
    qrCodeLogo = require('qrcode-logo'),

    url = 'https://huixisheng.github.is/',
    qrcodeImgFilePath = 'dist/qr_logo.png',
    logoBuffer = fs.readFileSync('image/logo.png', {
        encoding: null
    });

qrCodeLogo(url, qrcodeImgFilePath, {
    size: 10,  // 二维码单位块大小
    margin: 2,
    logo: logoBuffer, // logo数据
    logoBorder: {   // border边框配置
        width: 4,
        color: 0xcccfff
    },
    bottomText: {  // 底部文本框配置
        text: 'A12',
        bgColor: 0xeeefff
    }
});
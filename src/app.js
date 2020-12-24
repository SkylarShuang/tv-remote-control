const express = require('express')
const adbCommander = require('adb-commander')
const fs = require('fs')
const path = require('path')
const open = require('open')

const app = express()

app.all('*', (req, res, next) => {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin', '*')
    //允许的header类型
    res.header('Access-Control-Allow-Headers', 'content-type')
    //跨域允许的请求方式
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
    next()
})
//读取本地html并返回前端
app.get('/index.html', (req, res) => {
    //获取根目录
    const rootPath = path.join(__dirname, '../src/')
    fs.readFile(rootPath + req.path.substr(1), (err, data) => {
        // body
        if (err) {
            console.log(err)
            //404：NOT FOUND
            res.writeHead(404, {'Content-Type': 'text/html'})
        } else {
            //200：OK
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data.toString())
        }
        res.end()
    })
})

//监听前端的事件
app.get('*', (req, res) => {
    switch (req.url) {
        case '/up':
            operateFunc('adb shell input keyevent 19')
            res.end('up')
            break
        case '/left':
            operateFunc('adb shell input keyevent 21')
            res.end('left')
            break
        case '/right':
            operateFunc('adb shell input keyevent 22')
            res.end('right')
            break
        case '/down':
            operateFunc('adb shell input keyevent 20')
            res.end('down')
            break
        case '/ok':
            operateFunc('adb shell input keyevent 23')
            res.end('ok')
            break
        case '/menu':
            operateFunc('adb shell input keyevent 82')
            res.end('menu')
            break
        case '/back':
            operateFunc('adb shell input keyevent 4')
            res.end('back')
            break
        default:
            break
    }
})

/**
 * 设置端口号
 * @param {String} portOption - 端口号
 */
module.exports.setPort = function (portOption) {
    const port = portOption || 3001;
    //设置端口号
    app.listen(port)
    // 使用默认浏览器打开
    open(`http://127.0.0.1:${port}/index.html`)
    console.log(`tv-remote-control started on http://127.0.0.1:${port}/index.html`)
}

/**
 * 执行adb指令
 *
 * @param {String} command - adb指令
 */
function operateFunc (command) {
    adbCommander.exeCommand(command).then(({result, err}) => {
        if (err) {
            console.error('exeCommand "adb devices" failed')
        } else {
            console.log('success')
        }
    })
}


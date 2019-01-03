const fs = require('fs')

const readFile = (fileName, callback) => {
  fs.readFile(`./data/${fileName}`, (err, data) => {
    if (err) {
      return console.log('文件读取失败', err)
    }
    callback(data.toString())
  })
}

readFile('a.txt', data => {
  console.log('a:', data)
  readFile('b.txt', data => {
    console.log('b:', data)
    readFile('c.txt', data => {
      console.log('c:', data)
    })
  })
})
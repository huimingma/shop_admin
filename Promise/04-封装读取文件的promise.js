const fs = require('fs')

// fs.readFile('./data/a.txt', (err, data) => {
//   if (err) {
//     return console.log(err)
//   }
//   console.log(data.toString())
// })


const p = new Promise((resolve, reject) => {
  fs.readFile('./data/a.txt', (err, data) => {
    if (err) {
      return reject(err)
    }
    resolve(data.toString())
  })
})
p.then(data => {
  console.log('文件内容', data)
}).catch(err => {
  console.log('读取失败，失败信息', err)
})
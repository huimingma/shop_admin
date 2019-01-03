const fs = require('fs')

const readFile = fileName => {
  const p = new Promise((resolve, reject) => {

    fs.readFile(`./data/${fileName}`, (err, data) => {
      if (err) {
        return reject(err)
      }
      resolve(data.toString())
    })
  })
  return p
}

readFile('a.txt')
  .then(data => {
    console.log('a:', data)
    return readFile('b.txt')
  })
  .then(data => {
    console.log('b:', data)
    return readFile('c.txt')
  })
  .then(data => {
    console.log('c:', data)
  })
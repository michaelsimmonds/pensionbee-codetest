const express = require('express')
const fs = require('fs')
const marked = require('marked')  // enables render of markdown
const path = require('path')
const Promise = require('bluebird')
Promise.promisifyAll(fs)

const app = express()

const dataToSend = (req, res) => {
  const template = fs.readFileSync('./template.html', 'utf8')
  const pathExists = fs.readFileAsync(path.join(__dirname, `/content/${req.params.folder}/index.md`))
  pathExists
    .then(val => res.status(200).send(template.replace(/{{content}}/, marked(val.toString()))))
    .catch(err => res.status(404).send(err.message))
}

app.get('/:folder', dataToSend)

app.listen(4000, () => console.log('Express is running on port 4000'))

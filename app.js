const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/foo', function (req, res) {
    res.send({ foo:'bar'})
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

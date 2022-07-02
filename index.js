const express = require('express')
const bodyParser = require("body-parser");
const app = express()

const usersRouter = require('./routes/users');
const port = process.env.PORT || 4000

app.use(bodyParser.json())


app.use('/users', usersRouter)


app.get('/', (req, res) => res.send('default route'))

app.use((err, req, res, next) => {
  console.log(err)
  res.status(404).json(err.message)
})

app.listen(port, () => {
  console.log('app is listening on:', port)
})
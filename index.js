const express = require('express')
require('dotenv').config()
const morgan = require('morgan')

const app = express()

const port = process.env.PORT || 3000

app.use(morgan('dev'))

app.use('/', (req, res) => {
  res.status(200).json({ message: 'hi server' })
})

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`)
})
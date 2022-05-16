const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const connectDB = require('./db/connectDB')
const getUser = require('./routes/userRoutes')
const cors = require('cors')
require('dotenv').config()
connectDB()

app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())

app.use('/api/user', getUser)

app.get("/", (req, res) => res.send("hello from codeverse app 😀"))

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))
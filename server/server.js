const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT
const connectDb = require('./database/connect')


//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//database
connectDb()

//routes
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/posts',require('./routes/contentRoutes'))
app.use('/api/comments',require('./routes/commentRoutes'))
app.use('/api/reactions',require('./routes/likesRoutes'))

app.listen(port,()=>console.log(`SERVER ACTIVE ON PORT ${port}`))
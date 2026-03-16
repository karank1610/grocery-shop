const express = require("express")
const app = express()
const dbconnect = require('./config/dbconnect')
const userRoute = require('./routes/userRoute')
var cors = require('cors')
app.use(express.json())


dbconnect().then(()=> console.log('connected!'));

app.use(cors())
app.use('/',userRoute)

app.listen(5000,()=>{
    console.log("server 5000 is running~");
    
})
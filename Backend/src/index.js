import express from "express"
import cors from "cors"
import "dotenv/config"
import cookieParser from "cookie-parser"
import connectDB from "./db/index.js";

const app = express();

const port = process.env.PORT || 4000

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

connectDB().then(()=>{
    app.listen(port,(req,res)=>{
        console.log(`⚙️ Server is running at port : ${port}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


app.get('/',(req,res)=>{
    res.send('Hello from Server')
})

const express = require("express")
const app = express();

const routes = require("./routes/routes")

const PORT=8080

app.use(express.json());

app.get("/",(req,res)=>{
     res.send("<h1>Hello ,world</h1>")
})

app.use('/bfhl',routes)

app.listen(PORT,()=>{
   console.log(`server running on port ${PORT}`)
})

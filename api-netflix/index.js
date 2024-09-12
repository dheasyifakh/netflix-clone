const express = require('express')
const cors = require("cors")
const {OK, ERR} = require('./utils/response')

const app =  express()
const PORT = 4000

app.use(express.json())
app.use(cors())

app.get("/", (request, response)=> {
    const data = {
        isRunning: true,
        serverVersion: "1.0.0"
    }
    OK(response, 200, data, 'Success getting server main endpoint')
})
//melihat listing fav movies kita
app.get("/my-movies", (request, response)=> {
    const data = {
        id:1,
        title: "Hero",
        years: "2004"
    }
    OK(response, 200, data, 'Success getting my-movies endpoint')

})

//menambahkan fav movies
app.post("/my-movies", (request, response)=> {
    console.log("Inserting new favorite movies")
    const data = request.body;
    console.log({data})
    response.status(201).json({message: "success"})
})

//menghapus fav movies
app.delete("/my-movies/:id/:token", (request, response)=> {
    console.log("Delete favorite movies")
    const {id, token} = request.params;
    console.log({id,token})
    response.status(204).json({message: "success"})
})

//menambahkan data user untuk verifikasi sistem
app.post("/token", (request, response)=>{
    console.log("Creating user token")
    const data = request.body
    console.log({data})
    response.status(201).json({message: "success token created"})
})

app.listen(PORT,()=>{
    console.log("Server API jalan di port " + PORT)
} )

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('ok')
})


app.get('/test', (req, res) => {
    res.send({status:200, message:"ok"})
})

app.get('/time', (req, res) => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = time;
    res.send({status:200, time: dateTime})
})


app.get('/hello/:id', (req, res) => {
    var id = req.params.id;
    res.send({status:200, message:"Hello, " + id})    
    
})

app.get('/hello', (req, res) => {
    var id = req.params.id;
    res.send({status:200, message:"Hello"})
})

app.get('/search', (req, res) => {
    var Search = req.params.Search;
    res.send({status:500, error:true, message:"you have to provide a search"})
})

app.get('/search/:search', (req, res) => {
    var search = req.params.search;
    res.send({status:200, message:"ok", data: search})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

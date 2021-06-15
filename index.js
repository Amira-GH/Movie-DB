
const express = require('express')
const app = express()
const port = 3000
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
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

app.get('/movies/create', (req, res) => {
    res.send({})
})

app.get('/movies/read', (req, res) => {
    res.send({status:200, data: movies})
})

app.get('/movies/update', (req, res) => {
    res.send({})
})

app.get('/movies/delete', (req, res) => {
    res.send({})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

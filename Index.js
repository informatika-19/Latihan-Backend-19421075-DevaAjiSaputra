const express = require('express')
const app = express()
const bodyParser= require('body-parser')

app.use(bodyParser.json({
    extended: true,
    limit:'20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit:'20mb'
}))
 
app.get('/', function (req, res) {
  res.send('<h1>HELLO!</h1> Deva Aji Saputra<h1>Welcome</h1>')
})

app.get('/profile/:username/:id', function (req, res) {
    console.log(req.params)
    res.send('Username Anda = ' + req.params.username)
})
app.get('/daerah/:daerah', (req, res) => {
    console.log(req.params)
    res.send('Daerah Anda = ' + req.params.daerah)
})

app.post('/register', (reg, res) => {
    console.log(req.body)
})

app.listen(2000, () => {
    console.log('server started')
})
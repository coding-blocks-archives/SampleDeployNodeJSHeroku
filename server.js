const express = require('express')
const path = require('path')
const {PORT} = require('./config')
const app = express();
const {Item} = require('./db/models')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, "public_static")))
app.get('/hello', (r,s) => s.send('Hello'))

app.get('/items', (req, res, next) => {
    Item.find()
        .then((items) => res.send(items))
        .catch(err => next())
})
app.post('/items', (req, res, next) => {
    Item.create({
        stuff: req.body.stuff
    })
        .then((result) => res.redirect('/items'))
        .catch(err => next())
})



app.use((req, res) => res.status(404).send("Not found"))

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT)
})
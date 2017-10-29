const express = require('express')
const path = require('path')
const config = require('./config')
const app = express();

app.use('/', express.static(path.join(__dirname, "public_static")))
app.get('/hello', (r,s) => s.send('Hello'))

app.listen(config.PORT, () => {
    console.log("Server started at http://localhost:" + config.PORT)
})
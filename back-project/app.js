var express = require('express')
var cors = require('cors')
var app = express()
var port = 3000

var db = require('./db')
db.client.connect()
app.use(cors())


/* Répete cette boucle de code en modifiant la route */
app.put('/enregistrer', (req, res) => {
    var username = req.params.username
    var mail = req.params.mail
    var password = req.params.password
    var result = db.enregistrer(username,mail,password)
    result.then(function(rows) {
        res.send(rows)
     })   
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

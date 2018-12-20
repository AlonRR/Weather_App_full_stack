const express = require(`express`)
const path = require(`path`)
const api = require(`./server/routes/api`)
const dbLogic = require(`./server/model/dbLogic`)
const app = express()
const bodyParser = require(`body-parser`)
const mongoose = require(`mongoose`)
app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(`/`, api)
const port = 1203

app.listen(port, function () {
    console.log(`Hot ${port} on its way!`)
})
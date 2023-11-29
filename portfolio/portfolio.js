const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, 'portfolio.html'))
})

app.get("/hangman", (req, res) => {

    res.sendFile(path.join(__dirname, '/public/html/hangman.html'))
})

app.get("/higherlower", (req, res) => {

    res.sendFile(path.join(__dirname, '/public/html/high_low.html'))
})

app.get("/rps", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/rps.html'))
})


app.listen(3000)
console.log("My site is working")
// Some inital set up for Express
// We don't really need to worry about this, we just need them to make the app

const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

// CRUD:            Create, Read, Update, Destroy
// Request Types:    Post,  Get,   Put,    Delete

//      path request response
app.get("/", (req, res) => {

    // res.send("Hello World ")
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get("/cats", (req, res) => {

    // res.send("I am a cat 🐱")
    res.sendFile(path.join(__dirname, '/cats.html'))
})

app.get("/dogs", (req, res) => {

    res.send("Bark 🐶")
})

app.get("/birds", (req, res) => {

    res.send("Tweet 🐥")
})

app.get("/snakes", (req, res) => {

    res.send("Hiss 🐍")
})

app.get("/dogs/breeds/pugs", (req, res) => {
    res.send("Pugs are dogs")
})

app.post("/hello", (req, res) => {
    res.send("You made a post to /hello :)")
})

// This goes at the bottom!
app.listen(3000)
console.log("Express is running")
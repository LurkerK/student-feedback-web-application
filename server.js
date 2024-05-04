const express = require('express')
const path = require('path')

// import the routes in routes/index.js
const indexRouter = require('./routes/index')

const app = express()  // creates the web app server

// tell app where the views (HTML files or templates are)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')  // use handlebars to generate views

app.use('/', indexRouter)  // all requests to the app will be passed to indexRouter

// start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})
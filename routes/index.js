const express = require('express')
const router = express.Router() // figures out what code to run in response to a request
// typically based on the URL, and the method,


// responds to get request to home page /
router.get('/', function(req, res, next) {  // request, response, next
    // name of Handlebars file - name of a template, optional object with data for the template
    res.render('index', { title: 'Feedback Application' })
})    // get request to the home page


module.exports = router
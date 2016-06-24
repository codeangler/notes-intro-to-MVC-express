//DECLARE GLOBAL VARIABLES
const Express = require('express')
const app = Express()
const bodyParser = require('body-parser')
const logger = require('morgan')
const path = require('path')
// how do I include my api_routes.js? ** use the relative file path
const apiRoutes = require('./api_routes')
const port = process.env.PORT || 1337


//APPLY MIDDLEWARE
app.use(logger('dev'))//LOG ALL IN-COMING ROUTES
app.use(bodyParser.json())//PARSE ALL FORM DATA TO JSON
app.use(bodyParser.urlencoded({extended: true}))//ALLOW URL-ENCODED TO BE PARSED
app.use(Express.static(path.join(__dirname, './public')))//SERVER YOUR PUBLIC FILES FOR THE FRONTEND

//MOUNT THE API ROUTES
app.use('/api/v1', apiRoutes ) // takes two arguments, first ** the prefix to from RESTful convention **e.g.  http://pokeapi.com/api/v1 **; second is router object  


//LISTEN ON A SPECIFIC PORT CHECK FOR ERROR
app.listen(port, function (err) {
  if ( !err ) console.log('Server is listening on port: ' + port)
  if ( err )  console.log('Server Crashed!')
})

//IMPORT YOUR EXTERNAL MODULE'S
var
    ctrls = require('./controllers'), // 6. bring ctrl  ** have to put in the relative path to FILENAME and not what was export from file  for self-created module in constrast to third party imports which are going to look in node_modules
    apiRouter = require('express').Router() //1 creating a router object, bringing ing express

// USE THE EXPRESS ROUTER TO DECLARE ROUTES
// app.get('/plates', func(){})    , 2.1 how we used to do it before
    apiRouter.route('/plates')  //  2 RESTful only one each verb can be chained  GET PUT DELETE PATCH,  preferred method when calling
      .get(ctrls.platesController.all) // 4. don't () as it is a callback function 3. add in routeHandler function, the xtrls will be be there route handler
      .post(ctrls.platesController.create)  // 5.  HTTP (GET PUT) verbs DB (crud  CREATE R  UPDATE DELETE)


module.exports = apiRouter

//IMPORT MODEL OF DB COLLECTIONS
var db = require('./models.js')  // step 9.   from model export  modules.exports = {  plates : platesArray, }

//EXPORT CONTROLLER OBJECTS
module.exports = {
    // CREATE PLATES CONTROLLER FOR ROUTE HANDLERS  ** 10 doing all the calls to database
    platesController: {
      all: function(req, res){
        console.log("Querying db for all plate objects") // 11 test 
        res.json(db.plates) // alternative syntax res.send(db.plates), a route handler function, each rh needs to return something to client making request, sending back JSON data
      },//end of my all method
      // body parser adds  body 
      create: function(req,res){
        console.log("Data from form: ", req.body) // 12. request.body is retrieving from the FORM in the HTML without body-parser we would not have access to the body object // USING POSTMAN TO TEST TEH BODY FOR A POST request  in body 
        //  in POSTMAN   set POST,  body , raw text-> JSON || enter following test similar to the DB, as it will look and be passed to server
        //  haven't done the storing informaiton yet, ...  just testing the re

        //  ########  13 ..  need to send something back so they know they were success
        res.json({status: 200, success: true, message: "Created new Plate!"})
      }//end of create method
    }//end of my plates controller
}

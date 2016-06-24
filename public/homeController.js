(function() {
  //CREATE A SEPERATE MODULE FOR EACH JS FILE
  angular.module('homeMODULE',[])
  //BELOW IS THE ACTUAL CONTROLLER
    .controller('homeCtrl', homeCtrl)
    //INJECT FACTORY INTO CONTROLLER
    homeCtrl.$inject = ['foodFact']
    //FUNCTION DECLARATION FOR HOME CONTROLLER
    function homeCtrl(foodFact){
      //CONTROLLER AS SYNTAX INSTEAD OF $SCOPE
      var hCtrl = this

      hCtrl.name = "home Controller"

      //  step 5 .   access the get promise that is returned w/n factory and expose it w/n controller
      foodFact.all()
        .then(function(response){
          console.log("Data coming from our API all method: ", response)
          hCtrl.plates = response.data; // as soon as ctrl loads, foodfacts.all(), runs, stores response in argument
          // the array that comes back is called data   response.data 
          // this is where express meets angular   amking plate babies
          
        }) // argument *response is what is being returned in controllers.js file

        .catch(function(error){
          console.log("you had a server side error: ", error)
        })

      //SUBMIT METHOD FOR ANGULAR FORM
      hCtrl.submitPlate = function(plate){
        //MAKE THE API CALL FROM YOUR FACTORY OBJECT
        foodFact.create(plate)
          .then(function (response) {
            console.log("response from server create method",response)
          })
      }
    }


}());

(function() {
  //CREATE A SEPERATE MODULE FOR EACH JS FILE
  angular.module('foodMODULE', [])
  //BELOW IS THE ACTUAL FACTORY
    .factory('foodFact', foodFact)
    //FUNCTION DECLARATION FOR THE FACTORY
    function foodFact($http){
      var fFactory = {}
      //SEND A REQUEST TO OUR SERVER AND RETURN A PROMISE
      fFactory.create = function(plate){
        return $http.post('/api/v1/plates', plate) // access relative to ROOT of URL
        //   return $http.post('/api/v1/plates', plate).then(retrun)  DON"T DO THIS
      }

      //  names doen't have to match front to back end  but convieneint
      // access the 
      fFactory.all = function () {
        return $http.get('/api/v1/plates')  // don't have to pass it any object,  sends request to server route, and goes to line 10 w/n api_routes
        // note it isn't being used, just exposing it to the view, letting a controller use it 
        //
      }

      return fFactory
    }

}());

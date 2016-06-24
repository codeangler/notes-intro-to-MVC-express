// Thursday 
 --- look at layout of the file structure
--- install npm after reviewing package.json  that "Main: file.js" match file structure
---  call in packages
--- invoke the logger() method w/n the use() method...  declare the depth you want


server.js -> api_routes.js ->controller.js -> model.js  // have to follow this chain.  doesn't have to be made, except the model.js // 

#13 --- basically  completed backend two routes,,,
everything we do in backend is COMPLETELY seperate from front-end... 

review:
model.js up

  1. begin with model file,  it sets the DB is flexible, properties should already their to begin with well throughout SCHEMA
  2. MongoDB gives you a collection, a array object called Document, each document should ahve same schema i.e. same property names
  3. norammly do will show empty object, to query DB (see monday)
  4. exporting the array module.exports +{} to 
  5. controllers.js


controllers.js 

  1. put all controllers into a exports OJBECT
  2. i like to think of everything as objects
  3. I'm exporting one entire objects
  4. objects w/n primary object are ctrls
  5. w/n plateController ---  are partial CRUD   (currently just create request
  6. ?  all:  is is standardized set apart word?
  7. this doesn't push to db, but see the process her
  8. now seperate this object tinto the routes file 


api_routes.js

  1. recieces exports from controllers.js
  2. setting up routes using  apiRouter syntax
  3. ???? versus long hand...
  4. export to server.js 


server.js

  1. should be very very thin, no logic (app.js should be very very thin)
  2. nodemon server looks at package.json and looks for server.js, calls routes -> controllers.js models.js
  3. 




server loads server.js and when hits  #16 is initiated, looks into public folder

app.js 
simple w/n IIFE
inject controllers
inject facotry



w/ factory.js
     interact with the server
     line 11,   using to relative local URL ... only going from root  


$$$$$$$$$$$$   review thoughts

  1. first need a form   w/n index.html
  2. each inpute has ng-model that is connected to hCtrl
  3. w/ property name in HTML input that matches the schema   e.g.   hCtrl.newPlate.name
  4. w/ property number
  5. 



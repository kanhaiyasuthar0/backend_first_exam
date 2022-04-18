const express = require("express");
const app = express();

//logger for logging the route of req:
app.use((req,res,next)=>{
    let time = new Date()
    console.log(req.path,time);
    next();
})
//checkPermission middleware to direct for particular routes using a single middleware
function checkPermission(role) {
    return function(req, res, next) {
      if(role == "librarian"){
                   res.send({ route: "/libraries", permission: true})
      }else if(role == "author"){
          res.send({ route: "/authors", permission: true})
      }else{
          res.send(`Error at ${req.path.slice(1)}`)
      }
    }
  }


  app.get("/:anyother", checkPermission(''))
app.get("/books", (req,res)=>{
    res.send("/books")
})
app.get("/libraries", checkPermission('librarian'))
app.get("/authors",checkPermission('author') )


module.exports = app;
//server

  
  const express = require("express");
  const morgan = require("morgan");
  const path = require("path");


  const app = express();
  app.disable("x-powered-by");

  app.use(morgan("dev"));




    app.use(express.static(path.join(__dirname, "./client/build")));
    //Routes
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
  

  app.listen(process.env.PORT || 4000, () => {
    console.log("Server Started on port " + process.env.NODE_ENV);
  });

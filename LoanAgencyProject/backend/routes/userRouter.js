const router = require("express").Router();
const Visitor = require("../models/userModel");



// var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });





router.post("/apply", async (req, res) => {
    const userData= {firstName, lastName, email, phone , monthlySal, howLong , loanOption } = req.body;

    // console.log(x)
    const visitor = await Visitor.create(userData);
    if(!visitor){
      console.log(err);
    }
          //  if (err) throw err;
    else {
      console.log("1 document inserted");
    } 

});

  module.exports = router ;
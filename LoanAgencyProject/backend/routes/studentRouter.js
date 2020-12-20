const router = require("express").Router();
const Student = require("../models/studentModel");




router.post("/applyStudent", async (req, res) => {
    const studentData= {firstname, lastname, phone ,email, working, universityname , universityid , universitymajor, expectedyears, neededamount } = req.body;

    console.log(studentData)
    const student = await Student.create(studentData);
    if(!student){
      console.log(err);
    }
          //  if (err) throw err;
    else {
      console.log("student document inserted");
      res.send("true")
    } 
});

  module.exports = router ;
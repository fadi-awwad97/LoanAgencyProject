const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb://localhost:27017/LoanAgency", {useNewUrlParser: true, useUnifiedTopology:true }, (error)=>{
    if(!error)
    {
        console.log("Success Connected");
    }
    else 
    {
        console.log("Error connectiong to database")
    }
});
const Fee = require('../models/fees.model.js');

exports.create = (req, res) => {
    // Validate request
    if(!req.body.feetype) {
        return res.status(400).send({
            message: "Fee content can not be empty"
        });
    }
    /*Wconsole.log( year:[
        {first: req.body.year.first},
        {second: req.body.year.second},
        {third: req.body.year.third},
        {fourth: req.body.year.fourth}
       ]);*/
        // Create a Fee
    const fee = new Fee({
        feetype: req.body.feetype || "Untitled degree name", 
        year: [ {
            first: req.body.year.first,
            second:req.body.year.second,
            third:req.body.year.third,
            fourth:req.body.year.fourth
    
         } ],
        /*year:[
            {first: req.body.year.first},
            {second: req.body.year.second},
            {third: req.body.year.third},
            {fourth: req.body.year.fourth}
           ], */      
         courseid:req.body.courseid
    });

    // Save Fee in the database
    fee.save()
    .then(data => {
        res.send(data);

    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Course."
        });
    });
};


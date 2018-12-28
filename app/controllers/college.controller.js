const College = require('../models/college.model.js');


exports.create = (req, res) => {
    // Validate request
  

    if(!req.body.collegename) {
        return res.status(400).send({
            message: "College Name content can not be empty"
        });
    }

    // Create a college
    const college = new College({
        collegename: req.body.collegename , 
        collegetype: req.body.collegetype,
        collegeloc: req.body.collegeloc
    });

    // Save college in the database
    college.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the College."
        });
    });
};
exports.findOne = (req, res) => {
console.log(req.body.collegeId)
    College.findById(req.body.collegeId)
    .then(college => {
        if(!college) {
            return res.status(404).send({
                message: "College not found with id " + req.body.collegeId
            });            
        }
        res.send(college);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "College not found with id " + req.body.collegeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.body.collegeId
        });
    });
};

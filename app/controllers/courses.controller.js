const Course = require('../models/courses.model.js');
const College = require('../models/college.model.js');

exports.create = (req, res) => {
    // Validate request
    if(!req.body.degreename) {
        return res.status(400).send({
            message: "Course content can not be empty"
        });
    }

        // Create a course
    const course = new Course({
        degreename: req.body.degreename || "Untitled degree name", 
        coursename: req.body.coursename,
        graduationtype :req.body.graduationtype,
        collegeid:req.body.collegeid
    });

    // Save course in the database
    course.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Course."
        });
    });
};

exports.findCoursebyCollege = (req, res) => {
        Course.find({ collegeid : req.body.collegeid })
        .exec(function (err, course) {
            if (err){
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Courses not found with given College Id " + req.body.companyId
                    });                
                }
                return res.status(500).send({
                    message: "Error retrieving Courses with given College Id " + req.body.companyId
                });
            }
                        
            res.send(course);
        });
    };

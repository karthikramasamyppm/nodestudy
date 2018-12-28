const mongoose = require('mongoose');
const College = require('../models/college.model.js');

const Schema=mongoose.Schema;
const CourseSchema = mongoose.Schema({
    degreename: String,
    coursename: String,
    graduationtype:String,
   // college: {type:Schema.Types.ObjectId,ref:'College'}
    collegeid : [{ type: Schema.Types.ObjectId, ref: 'College' }]      
}, {
    timestamps: true
});

module.exports = mongoose.model('course', CourseSchema);
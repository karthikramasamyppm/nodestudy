const mongoose = require('mongoose');
const course = require('../models/courses.model.js');

const Schema=mongoose.Schema;
const FeeSchema = mongoose.Schema({
    feetype: String,
    
    //year:[ {first:Number}, {second:Number},{third:Number},{forth:Number}],

    year: [ {
        first: Number,
        second:Number,
        third:Number,
        fourth:Number

     } ],
    
    courseid : [{ type: Schema.Types.ObjectId, ref: 'Course' }]      
}, {
    timestamps: true
});

module.exports = mongoose.model('Fee', FeeSchema);
const mongoose = require('mongoose');

const CollegeSchema = mongoose.Schema({
    collegename: String,
    collegetype:String,
    collegeloc: String
    
}, {
    timestamps: true
});
module.exports = mongoose.model('College', CollegeSchema);
module.exports = (app) => {
    const courses = require('../controllers/courses.controller.js');
    app.put('/courses', courses.create);
    app.post('/coursebycolleges',courses.findCoursebyCollege);
  
    
}
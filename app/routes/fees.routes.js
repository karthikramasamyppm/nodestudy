module.exports = (app) => {
    const fees = require('../controllers/fees.controller.js');
    app.put('/fees', fees.create);
    //app.post('/coursebycolleges',courses.findCoursebyCollege);
  
    
}
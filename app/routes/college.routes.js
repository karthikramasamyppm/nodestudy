module.exports = (app) => {
    const colleges = require('../controllers/college.controller.js');
    app.post('/colleges', colleges.create);
    app.post('/collegesbyid', colleges.findOne);
   
    
}
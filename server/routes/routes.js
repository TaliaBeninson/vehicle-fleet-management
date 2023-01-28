const express = require('express'),
    vehicleRoutes = require('./vehicle');

var router = express.Router();

router.post('/vehicle', vehicleRoutes.CreateVehicle);
// router.put('/conference/:id', conferenceRoutes.updateConference);
// router.delete('/conference/:id', conferenceRoutes.deleteConference);
// router.get('/getconference/:id', conferenceRoutes.getConference);
router.get('/getVivecleById/:id', vehicleRoutes.getVivecleById);
router.get('/getvehicles/', vehicleRoutes.getvehicles);
router.post('/employee', vehicleRoutes.CreateEmployee);
// router.post('/addLecturer/:conference_id', conferenceRoutes.AddLecturerToConference);
router.get('/getEmployee/', vehicleRoutes.getEmployee);
// router.get('/getLecturesConference/:id', conferenceRoutes.getLecturesFromConferences);
// router.delete('/lecturer/:id/:name_lecturer', conferenceRoutes.deleteLecturerFromConference);
// router.get('/getLecture/:id', conferenceRoutes.getLecture);



module.exports = router;
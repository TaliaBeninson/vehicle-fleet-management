
const Person = require('../models/Person.js');
const Lecture = require('../models/Person.js')
const Vehicle = require('../models/Vehicle.js')
// helper methods


function isValidURL(str) {//function to check url
    try {
        const url = new URL(str);// Create a new URL object
        const searchParams = url.searchParams; // Use the searchParams property to check if the URL has any query parameters
        return true;// If no exception is thrown, the URL is valid
    } catch (error) {
        return false; // If an exception is thrown, the URL is not valid
    }
}



module.exports = {
    //READ 
    getvehicles: function (req, res) {
        Vehicle.find().then(vehicle => res.send(vehicle)).catch(e => res.status(500).send())
    },

    getEmployee: async function (req, res) {
        await Person.find().then(employee => res.send(employee)).catch(e => res.status(500).send())
    },

    // getConference: function (req, res) {
    //     if (!req.params["id"]) res.status(400).send("no id");
    //     else {
    //         Conference.find({ "_id": req.params.id }).then(conference => {
    //             res.status(200).send(conference)
    //         }
    //         ).catch(e => res.status(500).send())
    //     }
    // },

    getVivecleById: function (req, res) {
        if (!req.params["id"]) res.status(400).send("no id");
        else {
            Vehicle.find({ "car_id": req.params.car_id }).then(vehicle => {
                res.status(200).send(vehicle)
            }
            ).catch(e => res.status(500).send())
        }
    },

    // getLecture: function (req, res) {
    //     if (!req.params["id"]) res.status(400).send("no id");
    //     else {
    //         Lecture.find({ "_id": req.params.id }).then(lecture => {
    //             res.status(200).send(lecture)
    //         }
    //         ).catch(e => res.status(500).send())
    //     }
    // },

    // getLecturesFromConferences: async function (req, res) {
    //     await Conference.findOne({ _id: req.params.id }).then(conference => {
    //         if (conference.lectures.length == 0)
    //             res.status(200).send([]);
    //         var lecturesFromConferences = []
    //         var flag = 0
    //         conference.lectures.forEach((lecture, i) => {
    //             Lecture.findOne({ _id: lecture }).then(lecture => {
    //                 var temp = []
    //                 temp.push(lecture._id)
    //                 temp.push(lecture.name)
    //                 temp.push(lecture.picture)
    //                 temp.push(lecture.site)

    //                 lecturesFromConferences[i] = temp
    //                 flag = 1
    //                 if ((i == conference.lectures.length - 1) && (flag == 1)) {
    //                     res.status(200).send(lecturesFromConferences);
    //                 }
    //             })
    //         });
    //     }).catch(e => res.status(500).send())
    // },

    // CREATE
    CreateVehicle: function (req, res) {
        newDate = new Date().toISOString().slice(0, 10)
        if (!req.body) res.status(400).send("no body")
        else if (!req.body.car_id || !req.body.name_car || !req.body.year_car || !req.body.type_car || !req.body.receive_date ) res.status(400).send("Missing parameters")
        else {
            const temp_vehicle = {
                "car_id": req.body.car_id,
                "name_car": req.body.name_car,
                "year_car": req.body.year_car,
                "type_car": req.body.type_car,
                "receive_date": req.body.receive_date,
                "next_check_date": req.body.receive_date,
                "next_test_date": req.body.receive_date,
                "picture":"https://content-images.carmax.com/qeontfmijmzv/MY19MKj0XutK084z874jt/9632621fd8464b5c0e54a9dee64ad4e5/tesla.jpg"
            };
            const vehicle = new Vehicle(temp_vehicle);
            vehicle.save().then(vehicle =>
                res.status(201).send(vehicle)
            ).catch(e => res.status(400).send(e.message))
        }
    },

    CreateEmployee: function (req, res) {
        
        if (!req.body) res.status(400).send("no body");
        else if (!req.body.employee_id || !req.body.name || !req.body.role || !req.body.email) res.status(400).send("Missing parameters");
        else {
            const temp_employee = {
                "employee_id": req.body.employee_id,
                "name": req.body.name,
                "role": req.body.role,
                "email": req.body.email,
            };
            const employee = new Person(temp_employee);
            employee.save().then(employee =>
                res.status(201).send(employee)
            ).catch(e => {
                res.status(400).send(e)
            })
        }
    },

    // // UPDATE
    // updateConference: function (req, res) {

    //     newDate = new Date().toISOString().slice(0, 10)
    //     if (!req.body) res.status(400).send("no body")
    //     else if (!req.body.id || !req.body.name || !req.body.logo_picture || !req.body.director || !req.body.date) res.status(400).send("Missing parameters")
    //     else if (req.body.isSeries == "on" && !req.body.series_number) res.status(400).send("Missing parameters")
    //     else if (req.body.isSeries == "on" && req.body.series_number <= 0) res.status(400).send("Missing parameters")
    //     else if (req.body.date < newDate) res.status(400).send("invalid date")
    //     else if (isValidURL(req.body.logo_picture) != true) res.status(400).send("invalid logo_picture")

    //     else {
    //         const updates = Object.keys(req.body)
    //         const allowedUpdates = ['id', 'name', 'logo_picture', 'director', 'date', 'isSeries', 'series_number']
    //         const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    //         if (!isValidOperation) {
    //             return res.status(400).send({ error: 'Invalid updates!' })
    //         }
    //         Conference.findOneAndUpdate({ "id": req.params.id }, req.body, { new: true, runValidators: true }).then(conference => {
    //             if (!conference) {
    //                 return res.status(404).send()
    //             }
    //             else {
    //                 res.send(conference)
    //             }
    //         }).catch(e => res.status(400).send(e))
    //     }

    // },

    // AddLecturerToConference: function (req, res) {
    //     if (!req.body) res.status(400).send("no body");
    //     else {

    //         Conference.findOneAndUpdate({ "_id": req.params["conference_id"] }, { $push: { lectures: req.body.lectureId } }, { new: true, runValidators: true }).then(conference => {
    //             if (!conference) {
    //                 return res.status(404).send()
    //             }
    //             else {
    //                 res.send(conference)
    //             }
    //         }).catch(e => res.status(400).send(e))
    //     }
    // },


    // // DELETE
    // deleteConference: function (req, res) {
    //     if (!req.params["id"]) res.status(400).send("no id")
    //     else {
    //         Conference.findOneAndDelete({ _id: req.params.id }, function (err) {
    //             if (!err) {
    //                 res.status(200).send();
    //             }
    //             else {
    //                 res.status(500).send()
    //             }
    //         });
    //     }
    // },

    // deleteLecturerFromConference: function (req, res) {

    //     if (!req.params["id"]) res.status(400).send("no id");
    //     else {
    //         Conference.findOneAndUpdate(
    //             { _id: req.params.id },
    //             { "$pull": { lectures: req.params.name_lecturer } } 
    //         ).then(conference => {
    //             if (conference)
    //                 res.status(200).send("lecture removed successfuly")
    //             else
    //                 res.status(404).send("no such conference")
    //         }).catch(e => { res.status(500).send(e) })
    //     }
    // }
};
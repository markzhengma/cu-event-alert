const Event = require('../models/event');

const eventsController = {};

eventsController.findAll = (req, res) => {
    Event.findAll()
    .then(events => {
        res.json(events);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

eventsController.create = (req, res) => {
    Event.create({
        event_name: req.body.event_name,
        event_type: req.body.event_type,
        event_time: req.body.event_time,
        event_fee: req.body.event_fee,
        event_location: req.body.event_location,
        event_location_detail: req.body.event_location_detail,
        event_desc: req.body.event_desc
    }, req.user.id)
    .then(event => {
        res.json(event);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

module.exports = eventsController;
const Event = require('../models/event');

const eventsController = {};

eventsController.findAll = (req, res) => {
    Event.findAll()
    .then(words => {
        res.json(words);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}

module.exports = eventsController;
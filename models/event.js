const db = require('../db/config');

const Event = {};

Event.findAll = () => {
    return db.query(`
    SELECT * FROM users_events
    `);
};

module.exports = Event;
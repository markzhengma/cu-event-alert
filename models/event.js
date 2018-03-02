const db = require('../db/config');

const Event = {};

Event.findAll = () => {
    return db.query(`
    SELECT * FROM users_events
    `);
};

Event.create = (event, user_id) => {
    return db.one(`
    INSERT INTO users_events
    (event_name, event_type, event_fee, event_time, event_location, event_location_detail, event_desc, user_id)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `, [event.event_name, event.event_type, event.event_fee, event.event_time, event.event_location, event.event_location_detail, event.event_desc, user_id]);
};

module.exports = Event;
const db = require('../db/config');

const Event = {};

Event.findAll = () => {
    return db.query(`
    SELECT users_events.id,
           users.username,
           users.firstname, 
           users.lastname, 
           users_events.event_name, 
           users_events.event_type, 
           users_events.event_fee, 
           users_events.event_time,
           users_events.event_location, 
           users_events.event_location_detail, 
           users_events.event_desc 
    FROM users_events 
    INNER JOIN users 
    ON users.id=users_events.user_id;
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
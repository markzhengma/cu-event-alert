-- \c cuevent_dev;

INSERT INTO users_events
    (event_name, event_type, event_fee, event_time, event_location, event_location_detail, event_desc)
VALUES
    ('DevFest', 'Job Fair', 0, '12-FEB-18', 'Mudd Hall', 'Room 644', 'Week-long Hackathon held by school of engineer in Columbia University'),
    ('Something', 'Open House', 5, '20-MAR-18', 'Thompson Hall', 'Room 101', 'Somethingsomethingsomething');
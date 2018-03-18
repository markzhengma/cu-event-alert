-- \c cuevent_dev

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email TEXT NOT NULL,
    school VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS users_events (
    id SERIAL PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    event_type TEXT NOT NULL,
    event_fee INTEGER,
    event_time DATE,
    event_location TEXT NOT NULL,
    event_location_detail TEXT NOT NULL,
    event_desc TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id)
);
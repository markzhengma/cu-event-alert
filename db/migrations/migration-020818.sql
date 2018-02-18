\c cuevent_dev

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
    event_time TEXT NOT NULL,
    event_disc TEXT NOT NULL
);
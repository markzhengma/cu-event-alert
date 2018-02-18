const db = require("../db/config");
const User = {};

User.findByUsername = username => {
    return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
    `, [username]);
};

User.create = user => {
    return db.one(`
    INSERT INTO users
    (username, password_digest, firstname, lastname, email, school)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `, [user.username, user.password_digest, user.firstname, user.lastname, user.email, user.school]);
};

User.update = (firstname, lastname, email, school, id) => {
    return db.one(`
    UPDATE users SET
    firstname = $1,
    lastname = $2,
    email = $3,
    school = $4
    WHERE id = $5
    RETURNING *
    `, [firstname, lastname, email, school, id]);
};

User.destroy = (id, user_id) => {
    return BADFAMILY.none(`
    DELETE FROM users
    WHERE id = $1
    `, [id]);
};

module.exports = User;
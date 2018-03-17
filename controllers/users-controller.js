const bcrypt = require("bcryptjs");
const User = require("../models/user.js");
const usersController = {};

usersController.create = (req, res) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);

    User.create({
        username: req.body.username,
        password_digest: hash,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        school: req.body.school,
    })
    .then(user => {
        req.login(user, (err) => {
            if(err)return next(err);
            res.json({
                message: "ok",
                user: user,
                auth: true,
            })
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

usersController.index = (req, res) => {
    res.json({
        user:req.user,
        data: "Put a user profile on this route"
    });
};

usersController.findUser = (req, res) => {
    User.findByUsername(req.params.username)
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}

usersController.update = (req, res) => {
    console.log(req.params);
    User.update(req.body.firstname, req.body.lastname, req.body.email, req.body.school, req.params.id)
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

usersController.delete = (req, res) => {
    User.destroy(req.params.id)
    .then(user => {
        res.json({
            message: "ok",
            user: user,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

module.exports = usersController;
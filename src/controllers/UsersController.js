/**
 * Created by bolorundurowb on 2/21/2019
 */

const User = require('./../models/User');

const usersController = {
    add: function (req, res) {
        const body = req.body;

        if (!body.email) {
            res.status(400).send({
                message: 'An email address is required.'
            });
        } else if (!body.password) {
            res.status(400).send({
                message: 'A password is required.'
            })
        } else {
            const user = new User(body);
            user.save((err) => {
                if (err) {
                    res.status(500).send({
                        message: 'An error occurred.',
                        error: err
                    });
                } else {
                    res.status(200).send({
                        user: user
                    });
                }
            });
        }
    },

    retrieve: function (req, res) {
        User.find({}, function (err, users) {
            if (err) {
                res.status(500).send({
                    message: 'An error occurred.',
                    error: err
                });
            } else {
                res.status(200).send({
                    users: users
                });
            }
        });
    }
};

module.exports = usersController;
 

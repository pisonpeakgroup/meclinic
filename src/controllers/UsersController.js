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
    }
   
    
};

const usersFeatures = {
    add: function (req, res) {
        const body = req.body;

        if (!body.country) {
            res.status(400).send({
                message: 'A country input is required.'
            });
        } else if (!body.age) {
            res.status(400).send({
                message: 'An age is required.'
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
    }
   
    
};


const usersFeatures = {
    add: function (req, res) {
        const body = req.body;

        if (!body.sex) {
            res.status(400).send({
                message: 'A input input is required.'
            });
        } else if (!body.lastName) {
            res.status(400).send({
                message: 'An lastName is required.'
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
    }
   
    
};


const usersFeatures = {
    add: function (req, res) {
        const body = req.body;

        if (!body.firstName) {
            res.status(400).send({
                message: 'A firstName input is required.'
            });
        } else if (!body.surname) {
            res.status(400).send({
                message: 'A surname is required.'
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
    }
   
    
};

//new controllers


module.exports = usersController;
 

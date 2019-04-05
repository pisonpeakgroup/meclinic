/**
 * Created by bolorundurowb on 2/21/2019
 */

const express = require('express');
const router = express.Router();
const UsersController = require('./../controllers/UsersController');


const route = function (router) {

    //POST Routes
    router.route('/users')
        .post(UsersController.add);

        router.route('/users:all')
        .post(UsersController.add);

        router.route('/users:delete')
        .post(UsersController.add);

        router.route('/users:update')
        .post(UsersController.add);

    
        //GET Routes
    router.rout('/users')
        .get(UsersController.add);

       router.rout('/users:all')
        .get(UsersController.add);

       router.rout('/users:delete')
        .get(UsersController.add);
        
       router.rout('/users:update')
        .get(UsersController.add);              
        
       };

module.exports = route;

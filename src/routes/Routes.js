/**
 * Created by bolorundurowb on 2/21/2019
 */

const express = require('express');
const router = express.Router();
const UsersController = require('./../controllers/UsersController');


const route = function (router) {
    router.route('/users')
        .post(UsersController.add);
    
    router.get('/users', async (req, res) => {
                console.log('Your welcome to our registration page');
                next()
                .get(usersFeatures.add);
                next()
            });
    router.get('/users:id', async (req, res) => {
          res.send('Your welcome to our login page');     
            });

    router.get('/users:all', async (req, res) => {
                  res.send('Your welcome to our logout page,your always welcome');   
             });

    router.get('/users:delete', async (req, res) => {
                   res.send('we are sorry to see you delete your account');
             });
             
    router.get('/users:update', async (req, res) => {
                res.send('Welcome to the edit page');
          });
                
        
       };

module.exports = route;

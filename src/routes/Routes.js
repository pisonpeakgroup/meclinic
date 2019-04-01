/**
 * Created by bolorundurowb on 2/21/2019
 */

const express = require('express');
const router = express.Router();
const UsersController = require('./../controllers/UsersController');


const route = function (router) {
    router.route('/users')
        .post(UsersController.add);

        const usersFeatures = function (router) {
            router.post('/users', async (req, res) => {
                console.log('Your welcome to our users page');
                next()
            });
            router.post('/register', async (req, res) => {
                console.log('Your welcome to our registration page');
                next()
            });
            router.post('/login', async (req, res) => {
                res.send('Your welcome to our login page');
            });
            router.post('/logout', async (req, res) => {
                  res.send('Your welcome to our logout page,your always welcome');   
             });
            router.post('/delete', async (req, res) => {
                   res.send('we are sorry to see you delete your account');
             });
             router.post('/edit', async (req, res) => {
                res.send('Welcome to the edit page');
          });
        
        };        
        
       };

module.exports = route;

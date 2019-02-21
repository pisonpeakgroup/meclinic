/**
 * Created by bolorundurowb on 2/21/2019
 */

const UsersController = require('./../controllers/UsersController');

const route = function (router) {
    router.route('/users')
        .post(UsersController.add);
};

module.exports = route;

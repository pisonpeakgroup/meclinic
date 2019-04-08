/**
 * Created by bolorundurowb on 2/21/2019
 */

const UsersController = require('./../controllers/UsersController');

const route = function (router) {
    router.route('/users')
    .get(UsersController.retrieve)
    .get(UsersController.retrievebyid)
        .post(UsersController.add);

        return router;
};

module.exports = route;

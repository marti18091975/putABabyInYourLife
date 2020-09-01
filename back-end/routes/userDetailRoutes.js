const express = require('express');

const userDetailRouter = express.Router();

function routes(UserDetail) {
    userDetailRouter
        .route('/')
        .post((req, res) => {
            const userDetail = new UserDetail(req.body);
            userDetail.save();
            res.status(201).json(userDetail);
        })
        .get((req, res) => {
            const query = {};
            if (req.query.id) { query.id = req.query.id; }

            UserDetail.find(query, (err, usersDetail) => {
                if (err) { res.send(err); }
                console.log("esta es la query", usersDetail);;
                res.json(usersDetail);
            });
        });

    userDetailRouter.use('/:id', (req, res, next) => {

        UserDetail.findById(req.params.id, (err, userDetail) => {


            if (err) res.send(err);
            if (userDetail) {

                req.userDetail = userDetail;
                next();
            }
        });
    });
    userDetailRouter
        .route('/:id')
        .get((req, res) => res.send(req.userDetail));
    return userDetailRouter;
}
module.exports = routes;
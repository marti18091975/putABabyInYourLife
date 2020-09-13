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

    userDetailRouter.use('/:email', (req, res, next) => {

        UserDetail.findById(req.params.email, (err, userDetail) => {


            if (err) res.send(err);
            if (userDetail) {

                req.userDetail = userDetail;
                next();
            }
        });
    });
    userDetailRouter
        .route('/:email')
        .put((req, res) => {
            const { userDetail } = req;
            if (userDetail) {
                userDetail.name = req.body.name;
                userDetail.save((err) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json(userDetail);
                });
                res.status(200);
            } else {
                res.status(404);
            }
            console.log("estem fent un put");
        })
        .get((req, res) => res.send(req.userDetail));
    return userDetailRouter;
}
module.exports = routes;
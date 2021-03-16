const should = require('should');
const sinon = require('sinon');
const { put, get, post } = require('./userDetailRoutes');

// HOW TEST CALLBACK LINES

describe('userDetailRouterControlerSpec', () => {
    describe('PUT', () => {
        it('Should return status 404 if req has no user', () => {
            const req = {};
            const res = {
                status: sinon.spy()
            };

            put(req, res);
            res.status.calledWith(404).should.equal(true);
        });
        it('Should return status 200 if req has found without _id', () => {
            const req = {
                user: { _id: "5f5ced85115fe25678d16118", save: function save() { } },
                body: { name: 'Martinet' }
            };

            const res = {
                status: sinon.spy()
            };

            put(req, res);
            res.status.calledWith(200).should.equal(true);
        });
    });

    describe('GET', () => {
        it('Should return status 404 if req has no user', () => {
            const req = {};
            const res = {
                status: sinon.spy()
            };

            get(req, res);
            res.status.calledWith(404).should.equal(true);
        });
        it('Should return status 200 if req has found', () => {
            const req = {
                user: { _id: "5f5ced85115fe25678d16118", save: function save() { } },
                body: { name: 'Martí' }
            };

            const res = {
                status: sinon.spy(),
                json: sinon.spy()
            };

            get(req, res);
            res.status.calledWith(200).should.equal(true);
        });
    });
});
const express = require('express');
const router = express.Router();
const userService = require('./userService');

// routes
router.post('/users/authenticate', authenticate);
router.get('/users', getAll);

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

module.exports = router;
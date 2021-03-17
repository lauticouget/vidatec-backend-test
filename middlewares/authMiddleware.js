const expressJwt = require('express-jwt');
const config = require('../config/config.json');

function jwt() {
    const { secret } = config;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            '/api/users/authenticate'
        ]
    });
}

module.exports = jwt;
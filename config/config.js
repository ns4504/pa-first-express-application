//if process.env.NODE_ENV is set to production it reads from
//the production.js file; if set to development it reads from
//the deveopment.js file
module.exports = require('./env/' + process.env.NODE_ENV);
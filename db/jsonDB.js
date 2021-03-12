const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;

const db = new JsonDB(new Config("./db/myDatabase", true, true, '/'));

db.push("/todos", [{"task": "first task", "completed": false}]);

module.exports = db;
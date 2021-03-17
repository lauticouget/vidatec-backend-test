// require('rootpath')();
const express = require('express');
const app = express();
// const cors = require('cors');
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/authMiddleware');
const errorHandler = require('./helpers/errorHandler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(jwt());
app.use('/api', authMiddleware(), [
    require('./users/userController'),
    require('./todos/todosController')
]);
// app.use('/api/users', require('./users/userController'));
// app.use('/api/todos', require('./todos/todosController'));

// global error handler
app.use(errorHandler);

// start server
const port = 3000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
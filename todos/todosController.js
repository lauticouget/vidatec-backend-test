const express = require('express');
const router = express.Router();
const todosService = require('./todosService');

// routes
router.get('/todos', getAll);
router.post('/todos', add);
router.delete('/todos', remove);
router.put('/todos', edit);

function getAll(req, res, next) {
    todosService.getAll()
        .then(todos => res.json(todos))
        .catch(next);
}

function add(req, res, next) {
    todosService.addTodo(req.body)
        .then(todo => res.json({ success: true, message: "Todo saved" }))
        .catch(next);
}

function remove(req, res, next) {
    todosService.deleteTodo(req.body)
        .then(todo => res.json({ success: true, message: "Todo deleted" }))
        .catch(next);
}

function edit(req, res, next) {
    todosService.editTodo(req.body)
        .then(todo => res.json({ success: true, message: "Todo edited" }))
        .catch(next);
}

module.exports = router;
const Todo = require('../models/todo-model')

createTodo = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a todo',
        })
    }

    const todo = new Todo(body)

    if (!todo) {
        return res.status(400).json({ success: false, error: err })
    }

    todo
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: todo._id,
                message: 'Todo created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Todo not created!',
            })
        })
}

updateTodo = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    const thisTodo = Todo.findOne({ _id: req.params.id } );
    console.log("thistodo.length is ");
    console.log(thisTodo.length);
    console.log("thistodo[0].summary is ");
    console.log(thistodo[0].summary);
    if (!thisTodo.length) {
        return res
            .status(404)
            .json({ success: false, error: `No Todos found` })
    }
    if (thisTodo.length !== 1) {
        return res
            .status(404)
            .json({ success: false, error: `Too many Todos found` })
    }
    return res.status(200).json({ success: true, data: thisTodo })
/*
    Todo.findOne({ _id: req.params.id }, (err, todo) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Todo not found!',
            })
        }
        todo.name = body.name
        todo.time = body.time
        todo.rating = body.rating
        todo
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: todo._id,
                    message: 'Todo updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Todo not updated!',
                })
            })
    })
*/
}

deleteTodo = async (req, res) => {
   console.log("toDelete.id is ");
   console.log(req.params.id);
   const toDelete = await Todo.findOneAndDelete({ _id: req.params.id })
   console.log("toDelete.length is ");
   console.log(toDelete.length);
   if (!toDelete) {
     return res
     .status(404)
     .json({ success: false, error: `Todo not found` })
   }

   return res.status(200).json({ success: true, data: toDelete })
/*
   , (err, todo) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!todo) {
            return res
                .status(404)
                .json({ success: false, error: `Todo not found` })
        }

        return res.status(200).json({ success: true, data: todo })
    }).catch(err => console.log(err))
/*
   await Todo.findOneAndDelete({ _id: req.params.id }, (err, todo) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!todo) {
            return res
                .status(404)
                .json({ success: false, error: `Todo not found` })
        }

        return res.status(200).json({ success: true, data: todo })
    }).catch(err => console.log(err))
*/
}

getTodoById = async (req, res) => {
    console.log("getTodoById.id is ");
    console.log(req.params.id);
    const todo = await Todo.findOne({ _id: req.params.id } )
    console.log("getTodoById.length is ");
    console.log(getTodoById.length);

    if (!todo) {
      return res
      .status(404)
      .json({ success: false, error: `Todo not found` })
    }
    return res.status(200).json({ success: true, data: todo })
/*
    await Todo.findOne({ _id: req.params.id }, (err, todo) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!todo) {
            return res
                .status(404)
                .json({ success: false, error: `Todo not found` })
        }
        return res.status(200).json({ success: true, data: todo })
    }).catch(err => console.log(err))
*/
}

getTodos = async (req, res) => {

    const todos = await Todo.find( { } );
    console.log("todos.length is ");
    console.log(todos.length);
    console.log("todos[0].summary is ");
    console.log(todos[0].summary);
    if (!todos.length) {
        return res
            .status(404)
            .json({ success: false, error: `No Todos found` })
    }
    return res.status(200).json({ success: true, data: todos })
}

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodos,
    getTodoById,
}

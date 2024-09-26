const express = require('express');

const { validateSignUp } = require('../validation/signup');

const router = express.Router();
const {
    createTask,
    updateTask,
    getTasks,
    deleteTask,
    setReminder
  } = require('../controllers/task');
const { signup, signin, getUser, updateUser, signout } = require('../controllers/user');

// Signup route
router.post('/signup', validateSignUp, signup);
router.post('/signin', signin);
router.post('/signout', signout);
router.get('/', getUser);
router.put('/update', updateUser);

// Task routes
router.post('/create', createTask);
router.put('/update/:id', updateTask);
router.get('/:id') // please fix this route Konie ( /:id, getTaskById) this route is the one that worked when I was testing on postman
router.get('/', getTasks); 
router.delete('/delete/:id', deleteTask)
router.post('/setReminder', setReminder);

// 


module.exports = router;
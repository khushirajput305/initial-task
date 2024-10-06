const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// POST create a new user
router.post('/create', userController.createUser);

// GET all users
router.get('/get', userController.getUsers);

// PUT update an existing user
router.put('/:id', userController.updateUser);




module.exports = router;

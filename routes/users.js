import express from 'express';

import {
	getUsers,
	createUser,
	getUniqueUser,
	deleteUserAccount,
	editUserInfos
} from '../controllers/users.js';

const router = express.Router();


// All routes in here are starting with /users


// Gettting all the users
router.get('/', getUsers);

// Adding a new user
router.post('/', createUser);

// Getting a unique user
router.get('/:id', getUniqueUser);

// Deleting a user account
router.delete('/:id', deleteUserAccount)

// Editing the user informations
router.patch('/:id', editUserInfos)


export default router;
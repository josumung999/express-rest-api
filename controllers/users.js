import { v4 as uuidv4 } from 'uuid';


let users = []

export const getUsers = (req, res) => {
	res.send(users);
}

export const createUser = (req, res) => {
	// accessing the data in the request
	const user = req.body;

	

	 // unuseful const userWithId = { ...user, uuidv4() }

	// Generating a unique id for such user
	// Adding the id to the user object
	// adding a user to the mock database

	users.push({ ...user, id: uuidv4() });

	res.send(`User with the name ${user.firstName} added to the database`);
}

export const getUniqueUser = (req, res) => {
	// Getting the id of a user
	const { id } = req.params;

	const foundUser = users.find((user) => user.id === id);



	res.send(foundUser);
}

export const deleteUserAccount = (req, res) => {
	// getting the id of a specific user
	const { id } = req.params;

	users = users.filter((user) => user.id !== id);

	res.send(`User with the id ${id} deleted form the database.`);
}

export const editUserInfos = (req, res) => {
	// getting the id of a specific user
	const { id } = req.params;
	const { firstName, lastName, age } = req.body;
	const user =  users.find((user) => user.id === id);

	if(firstName) user.firstName = firstName;
	if(lastName) user.lastName = lastName;
	if(age) user.age = age;

	res.send(`User with the id ${id} has been updated`);
}

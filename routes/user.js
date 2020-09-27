const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Adding a user
router.post('/add', async (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		city: req.body.city,
	});

	try {
		const newUser = await user.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Get all user
router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;

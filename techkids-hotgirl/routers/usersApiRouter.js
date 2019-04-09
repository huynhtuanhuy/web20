const express = require("express");
const Router = express.Router;
const usersApiRouter = Router();

const UserModel = require("../models/users");

// Create
usersApiRouter.post("/", (req, res) => {
	const { name, dob, password, location, gender, account } = req.body;
	UserModel.create(
		{ name, dob, password, location, gender, account },
		(err, userCreated) => {
			if (err) res.send({ success: 0, err })
			else res.send({ success: 1, data: userCreated });
		}
	);
});

// Read
usersApiRouter.get("/", (req, res) => {
	UserModel.find(
		{},
		(err, users) => {
			if (err) res.send({ success: 0, err })
			else res.send({ success: 1, data: users });
		}
	);
});

// Read one
usersApiRouter.get("/:id", (req, res) => {
	const { id } = req.params;
	UserModel.findById(
		id,
		(err, userFound) => {
			if (err) res.send({ success: 0, err })
			else res.send({ success: 1, data: userFound });
		}
	);
});

// Update
usersApiRouter.put("/:id", (req, res) => {
	const { id } = req.params;
	UserModel.findById(
		id,
		(err, userFound) => {
			if (err) res.send({ success: 0, err })
			else {
				for(let key in req.body) {
					if(userFound[key] !== undefined) {
						userFound[key] = req.body[key];
					}
				}
				userFound.save((err, userFound) => {
					if (err) res.send({ success: 0, err })
					else res.send({ success: 1, data: userFound });
				});
			}
		}
	);
});

//Delete
usersApiRouter.delete("/:id", (req, res) => {
	const { id } = req.params;
	UserModel.findByIdAndDelete(
		id,
		(err) => {
			if (err) res.send({ success: 0, err })
			else res.send({ success: 1, data: null });
		}
	);
});

module.exports = usersApiRouter;
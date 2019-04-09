const express = require("express");
const Router = express.Router;
const imagesApiRouter = Router();

const ImageModel = require("../models/images");

// Create
imagesApiRouter.post("/", (req, res) => {
	// const link = req.body.link;
	const { link, title, author, description } = req.body;
	ImageModel.create(
		{ link, title, author, description },
		(err, imageCreated) => {
			if (err) res.send({ success: 0, err })
			else res.send({ success: 1, data: imageCreated });
		}
	);
});

// Read
imagesApiRouter.get("/", (req, res) => {
	ImageModel.find({})
		.populate("author")
		.exec(
			(err, images) => {
				if (err) res.send({ success: 0, err })
				else res.send({ success: 1, data: images });
			}
		);
});

// Read one
imagesApiRouter.get("/:id", (req, res) => {
	const { id } = req.params;
	ImageModel.findById(
		id,
		(err, imageFound) => {
			if (err) res.send({ success: 0, err })
			else res.send({ success: 1, data: imageFound });
		}
	);
});

// Update
imagesApiRouter.put("/:id", (req, res) => {
	const { id } = req.params;
	ImageModel.findById(
		id,
		(err, imageFound) => {
			if (err) res.send({ success: 0, err })
			else {
				for(let key in req.body) {
					if(imageFound[key] !== undefined) {
						imageFound[key] = req.body[key];
					}
				}
				imageFound.save((err, imageSaved) => {
					if (err) res.send({ success: 0, err })
					else res.send({ success: 1, data: imageSaved });
				});
			}
		}
	);
});

//Delete
imagesApiRouter.delete("/:id", (req, res) => {
	const { id } = req.params;
	ImageModel.findByIdAndDelete(
		id,
		(err) => {
			if (err) res.send({ success: 0, err })
			else res.send({ success: 1, data: null });
		}
	);
});

module.exports = imagesApiRouter;
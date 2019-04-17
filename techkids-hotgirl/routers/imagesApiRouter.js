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
	).then(imageCreated => {
		res.send({ success: 1, data: imageCreated });
	})
	.catch(err => {
		res.send({ success: 0, err })
	});
});

// Read
imagesApiRouter.get("/", (req, res) => {
	const limit = Number(req.query.perPage) || 5;
	const page = req.query.page || 1;
	const skip = limit*(page-1);

	ImageModel.find(
			{},
			"author link title"
		)
		.populate({
			path: "author",
			select: "name account"
			// select: "-__v -_id -password"
			// select: "-__v -_id -password name account"
		})
		.limit(limit)
		.skip(skip)
		.then(images => {
			res.send({ success: 1, data: images });
		}).catch(err => {
			res.send({ success: 0, err });
		});
});

// Read one
imagesApiRouter.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const imageFound = await ImageModel.findById(id);
		res.send({ success: 1, data: imageFound });
	} catch (error) {
		res.send({ success: 0, err });
	}
});

// Update
imagesApiRouter.put("/:id", (req, res) => {
	// const { link, title, author, description } = req.body;
	const { id } = req.params;
	// ImageModel.findByIdAndUpdate(
	// 	id,
	// 	{ link, title, author, description },
	// 	{ new: true },
	// 	(err, imageSaved) => {
	// 		if (err) res.send({ success: 0, err })
	// 		else res.send({ success: 1, data: imageSaved });
	// 	}
	// );
	// ImageModel.findById(
	// 	id,
	// 	(err, imageFound) => {
	// 		if (err) res.send({ success: 0, err })
	// 		else {
	// 			for(let key in req.body) {
	// 				if(imageFound[key] !== undefined) {
	// 					imageFound[key] = req.body[key];
	// 				}
	// 			}
	// 			imageFound.save((err, imageSaved) => {
	// 				if (err) res.send({ success: 0, err })
	// 				else res.send({ success: 1, data: imageSaved });
	// 			});
	// 		}
	// 	}
	// );
	ImageModel.findById(id)
		.then(imageFound => {
			for(let key in req.body) {
				if(imageFound[key] !== undefined) {
					imageFound[key] = req.body[key];
				}
			}
			return imageFound.save();
		}).then(imageUpdated => {
			res.send({ success: 1, data: imageSaved });
		}).catch(err => {
			res.send({ success: 0, err });
		});
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
const express = require("express");
const Router = express.Router;
const apiRouter = Router();

const imagesApiRouter = require("./imagesApiRouter");
const usersApiRouter = require("./usersApiRouter");
const authRouter = require("./authRouter");

// http://localhost:6969/api => Hello
apiRouter.get("/", (req, res) => {
	res.send("Hello");
});

apiRouter.use("/auth", authRouter);

apiRouter.use((req, res, next) => {
	if (req.session.userAccount) {
		next();
	} else {
		res.status(401).send({ success: 0, message: "Bạn chưa đăng nhập!" });
	}
});

// authorization
apiRouter.use("/images", imagesApiRouter);
apiRouter.use("/users", usersApiRouter);

module.exports = apiRouter;
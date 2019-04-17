const express = require("express");
const bcrypt = require("bcryptjs");
const Router = express.Router;
const authRouter = Router();

const UserModel = require("../models/users");

// GET => http://localhost:6969/api/auth/me
// => Trả về info người đang đăng nhập

authRouter.get("/me", (req, res) => {
	const { userAccount } = req.session;
	if (!userAccount) {
		res.status(401).send({ success: 0, message: "Bạn chưa đăng nhập!" });
	} else {
		UserModel
			.findOne({ account: userAccount }, '-password')
			.then(userFound => {
				if (!userFound || !userFound._id) {
					res.status(404).send({ success: 0, message: "Người dùng không tồn tại!" });
				} else {
					res.send({ success: 1, data: userFound });
				}
			}).catch(err => {
				res.status(500).send({ success: 0, message: err });
			});
	}
});

authRouter.post("/login", (req, res) => {
	const { account, password } = req.body;
	if (!account || !password) {
		res.status(400).send({ success: 0, message: "Thiếu account hoặc password!" });
	} else {
		UserModel
			.findOne({ account })
			.then(userFound => {
				if (!userFound || !userFound._id) {
					res.status(404).send({ success: 0, message: "Người dùng không tồn tại!" });
				} else {
					if (bcrypt.compareSync(password, userFound.password)) {
						req.session.userAccount = account;
						res.send({ success: 1, message: "Đăng nhập thành công" });
					} else {
						res.status(401).send({ success: 0, message: "Sai mật khẩu." });
					}
				}
			}).catch(err => {
				res.status(500).send({ success: 0, message: err });
			});
	}
});

module.exports = authRouter;
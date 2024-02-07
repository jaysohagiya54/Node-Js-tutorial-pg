const express = require("express");
const {
  handleAllUsers,
  CreateUser,
  handleUserById,
  UpdateUser,
  DeleteUser,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(handleAllUsers).post(CreateUser);

router.route("/:id").get(handleUserById).patch(UpdateUser).delete(DeleteUser);

module.exports = router;

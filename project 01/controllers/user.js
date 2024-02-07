const User = require('../models/user')


async function handleUserById(req,res){
    const user = await User.findById(req.params.id);
    return res.json(user);
}
async function UpdateUser(req,res){
    const updatedData = req.body;

    // Find the user by ID
    const userToUpdate = await User.findByIdAndUpdate(req.params.id, {
      ...updatedData,
      _id: req.params.id,
    });
  
    if (!userToUpdate) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }
    return res.json({
      status: "success",
      message: "User updated successfully",
    });
}
async function CreateUser(req,res){
    const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.email ||
    !body.last_name ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are req..." });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log(result);
  return res.status(201).json({ msg: "Created user successfully" });
}
async function handleAllUsers(req,res) {
    const allDbusers = await User.find({});
    res.json(allDbusers);
}
async function DeleteUser (req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "User deleted successfully." });
}
module.exports = {
    handleAllUsers,
    handleUserById,
    CreateUser,
    UpdateUser,
    DeleteUser,
}
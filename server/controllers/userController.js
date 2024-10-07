const users = require("../models/userModel");

//create a new user
exports.createUser = async (req, res) => {
  const { name, email, designation } = req.body;
  try {
    const user = new users({ name, email, designation });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Get all users
exports.getUsers = async (req, res) => {
  try {
    const user = await users.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Update a user
exports.updateUser = async (req, res) => {
  const { id,name, email, designation } = req.body;
  try {
    const user = await users.findByIdAndUpdate(
      id,
      { name, email, designation },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error:err.message });
  }
};

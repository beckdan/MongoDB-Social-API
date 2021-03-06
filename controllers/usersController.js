const User = require("../models/User");
const Thought = require("../models/Thought");

const createUser = (req, res) => {
    User.create(req.body)
      .then((postData) => res.json(postData))
      .catch((err) => res.status(500).json(err));
  };

  const updateUser = (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) => {
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  };

  const getUsers = (req, res) => {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  };
  
  const getUserById = (req, res) => {
    User.findOne({ _id: req.params.userId })
      .then((user) => {
        !user
          ? res.status(404).json({ message: "No user found with that id" })
          : res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  };

  const deleteUser = async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
  
      if (!user) {
        res.status(404).json({ message: "No user found with that ID" });
      }
  
      await Thought.deleteMany({ userId: req.params.userId });
  
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  const addFriend = (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } }
    ).then((user) => {
      !user
        ? res.status(404).json({ message: "No user with that ID found" })
        : res.status(200).json(user);
    });
  };
  
  const deleteFriend = (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }
    ).then((user) => {
      !user
        ? res.status(404).json({ message: "No user with that ID found" })
        : res.status(200).json(user);
    });
  };
  

  module.exports = {
    createUser,
    updateUser,
    getUsers,
    getUserById,
    deleteUser,
    addFriend,
    deleteFriend,
  };
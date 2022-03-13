const { Thought, User, Reaction } = require('../models');

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

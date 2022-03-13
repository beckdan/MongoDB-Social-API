const { Thought, User, Reaction } = require('../models');

    const getAllThoughts = (req, res)  => {
        Thought.find({})
        .then((thoughts)=>res.json(thoughts))
        .catch((err)=>res.status(500).json(err));
    }

    const getThoughtById = (req, res) => {
        Thought.findOne({_id:req.params.thoughtId})
        .then((thought)=>{
            !thought ? res.status(404).json({message:"There is no thought matching that ID"}) : res.json(thought)
        })
        .catch((err)=>res.status(500).json(err))
    }
    
    const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
    
        const user = await User.findOneAndUpdate(
            {username: thought.username},
            {$push: {'thoughts': thought._id}},
            {safe: true, upsert:true}
        );
        if (!user) {
            res.json({ message: 'Thought created but no user found for this ID' })
          } else {
            res.json({ message: 'Thought created' })
          }
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      }

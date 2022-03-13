const router = require('express').Router();

const {
    createThought,
    updateThought, 
    getAllThoughts,
    getThoughtById,
    deleteThought, 
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtsController');

router.route('/')
    .get(getAllThoughts)
    .post(createThought);

router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
.post(addReaction);

router.route('./thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router; 


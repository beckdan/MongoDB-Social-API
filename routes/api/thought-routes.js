const router = require('express').Router();

const {
    createThought,
    updateThought, 
    getThoughts,
    getThoughtsById,
    deleteThought, 
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtsController');

router.route('/')
    .get(getThoughts)
    .post(createThought);

router.route('/:thoughtId')
    .get(getThoughtsById)
    .put(updateThought)
    .delete(deleteThought);


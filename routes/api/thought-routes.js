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
const router = require('express').Router();

const {
    createUser, 
    updateUser,
    getUsers, 
    getUsersById,
    deleteUser, 
    addFriend, 
    deleteFriend,
    getUserById,
} = require('../../controllers/usersController');

router.route('/')
.get(getUsers)
.post(createUser)

router.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend)

module.exports = router; 
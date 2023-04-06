const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/ThoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/thoughts/:thoughtId/assignments
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/assignments/:assignmentId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;

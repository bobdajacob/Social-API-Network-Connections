import { Router } from 'express';
const router = Router();

import { getThoughts, getSingleThoughts, createThought, updateThought, deleteThought } from '../../controllers/thoughtController.js';
//    /api/users
router.route('/').get(getThoughts).post(createThought);

//    /api/users/:thoughtId
router.route('/:thoughtId').get(getSingleThoughts).put(updateThought).delete(deleteThought);

export default router;
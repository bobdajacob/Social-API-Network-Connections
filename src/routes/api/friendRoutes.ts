import { Router } from 'express'
const router = Router();

import { addFriend, removeFriend } from '../../controllers/friendController.js';

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

export default router;
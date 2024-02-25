import { Router } from 'express';
import { authenticateUser } from '../../../helpers/authentication.js';
import checkIsCloud from '../../../helpers/check-is-cloud.js';
import getCurrentUserAction from '../../../controllers/api/v1/users/get-current-user.js';
import getUserTrialAction from '../../../controllers/api/v1/users/get-user-trial.ee.js';

const router = Router();

router.get('/me', authenticateUser, getCurrentUserAction);

router.get(
  '/:userId/trial',
  authenticateUser,
  checkIsCloud,
  getUserTrialAction
);

export default router;

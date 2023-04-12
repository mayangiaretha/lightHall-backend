import { Router } from 'express';
import asyncMiddleware from '../../middleware/async';
import LocationController from '../../controllers/location';

const router = Router();

router.get('/', asyncMiddleware(LocationController.getAllLocations));
router.post('/', asyncMiddleware(LocationController.postALocation));

export default router;

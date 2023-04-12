import { Router } from 'express';
import locationRoute from './location.route';

const routes = Router();

routes.use('/location', locationRoute);

export default routes;

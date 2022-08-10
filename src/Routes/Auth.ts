import { AuthController } from '../Controllers/Auth';
import { Router } from 'express';

const router = Router();
const Controller = new AuthController();

router.post('/api/signup', (request, response, next) => {
  Controller.signup(request, response, next);
});

export default router;
